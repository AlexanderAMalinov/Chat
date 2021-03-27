import http from 'http';
import Express from 'express';
import WebSocket from 'ws';
import bodyParser from 'body-parser';
import { config } from './config.js';
import { routes } from '../common/routes.js';
import { AuthorizationService } from './services/AuthorizationService.js';

const app = new Express();
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({ server });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static('dist'));

const authService = new AuthorizationService(config.USERS_DB_PATH, config.LOG_PATH);

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
  res.status(responseData.success ? 200 : 401);
  res.send(responseData);
});

app.listen(config.PORT, () => {
  console.log(`Listening on ${config.PORT}`);
});
