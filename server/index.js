import Express from 'express';
import { routes } from '../common/routes.js';
import bodyParser from 'body-parser';
import { RegistrationService } from './services/RegistrationService.js';

const port = 80;
const testDbPath = './DB.txt';

const app = new Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static('dist'));

const regsitrationService = new RegistrationService(testDbPath);

// Return start page
app.get(routes.ROOT, (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

// Make new user
app.post(routes.CREATE_USER, (req, res) => {
  regsitrationService.createNewUser(req.body);
  res.status(200);
});

// Make login
app.get(routes.LOGIN, (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
