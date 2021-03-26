import Express from 'express';
import bodyParser from 'body-parser';
import { routes } from '../common/routes.js';
import { AuthorizationService } from './services/AuthorizationService.js';

const port = 80;
const usersDbPath = './usersDB.txt';
const authService = new AuthorizationService(usersDbPath);

const app = new Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static('dist'));

app.get(routes.ROOT, (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

app.post(routes.CREATE_USER, async (req, res) => {
  let responseData;
  const formData = req.body;
  const userWithSameLogin = await authService.findUserData(formData);
  if (userWithSameLogin) {
    responseData = { success: false, errorMessage: 'User with same login already exist' };
  } else {
    await authService.createNewUser(formData);
    responseData = { success: true, conversations: [] };
  }
  res.status(responseData.success ? 200 : 401);
  res.send(responseData);
});

app.post(routes.LOGIN, async (req, res) => {
  let responseData;
  const formData = req.body;
  const relatedUserData = await authService.findUserData(formData);
  if (relatedUserData) {
    responseData = relatedUserData.password === formData.password
      ? { success: true, conversations: authService.getRelatedConversations() }
      : { success: false, errorMessage: 'Password is incorrect' };
  } else {
    responseData = { success: false, errorMessage: 'User with same name does not exist' };
  }
  res.status(responseData.success ? 200 : 401);
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
