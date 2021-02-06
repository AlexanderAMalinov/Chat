import Express from 'express';
import { routes } from './routes.js';

const port = 80;

const app = new Express();
app.use(Express.static('dist'));

// Return start page
app.get(routes.ROOT, (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

// Make new user
app.post(routes.CREATE_USER, (req, res) => {
  
});

// Make login
app.get(routes.LOGIN, (req, res) => {
  
});

// Get user conversations
app.get(routes.CONVERSATIONS, (req, res) => {

});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
