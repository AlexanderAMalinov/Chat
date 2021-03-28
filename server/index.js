import http from 'http';
import Express from 'express';
import WebSocket from 'ws';
import bodyParser from 'body-parser';
import { config } from './config.js';
import { routes } from '../common/routes.js';
import { AuthorizationService } from './services/AuthorizationService.js';
import { ConversationService } from './services/ConversationService.js';

const app = new Express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static('dist'));

const authService = new AuthorizationService(config.USERS_DB_PATH, config.LOG_PATH);
const convService = new ConversationService(config.CONVERSATIONS_DB_PATH, config.LOG_PATH);

app.get(routes.ROOT, (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.post(routes.CREATE_USER, async (req, res) => {
  const responseData = await authService.createNewUser(req.body);
  res.status(responseData.success ? 200 : 401);
  res.send(responseData);
});

app.post(routes.LOGIN, async (req, res) => {
  const responseData = await authService.makeLogin(req.body);
  const isLoginSuccessfull = responseData.success;
  if (isLoginSuccessfull) {
    const userConvs = await convService.getUserConversationsInfo(responseData.login);
    res.status(200);
    res.send({ ...responseData, userConvs });
  } else {
    res.status(401);
    res.send(responseData);
  }
});

server.listen(config.PORT, () => {
  console.log(`Listening on ${config.PORT}`);
});
