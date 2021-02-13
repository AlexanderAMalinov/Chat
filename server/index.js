import Express from 'express';
import bodyParser from 'body-parser';
import { routes } from '../common/routes.js';
import { AuthorizationService } from './services/RegistrationService.js';

const port = 80;
const usersDbPath = './DB.txt';

const app = new Express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.static('dist'));

const authService = new AuthorizationService(usersDbPath);

app.get(routes.ROOT, (req, res) => {
	res.sendFile('index.html', { root: 'dist' });
});

app.post(routes.CREATE_USER, async (req, res) => {
	await authService.createNewUser(req.body);
	res.status(200);
	res.send('Success');
});

app.post(routes.LOGIN, async (req, res) => {
	const result = await authService.findUserData(req.body);
  	res.status(200);
  	res.json(result);
});

app.listen(port, () => {
  	console.log(`Listening on ${port}`);
});
