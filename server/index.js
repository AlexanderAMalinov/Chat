import Express from 'express';
import bodyParser from 'body-parser';
import { routes } from '../common/routes.js';
import { LoginService } from './services/LoginService.js';
import { RegistrationService } from './services/RegistrationService.js';

const port = 80;
const testDbPath = './DB.txt';

const app = new Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static('dist'));

const loginService = new LoginService(testDbPath);
const regsitrationService = new RegistrationService(testDbPath);

// Return start page
app.get(routes.ROOT, (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

// Make new user
app.post(routes.CREATE_USER, async (req, res) => {
  await regsitrationService.createNewUser(req.body);
  res.status(200);
  res.send('Success');
});

// Make login
app.post(routes.LOGIN, async (req, res) => {
  const result = await loginService.findUserData(req.body);
  res.status(200);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
