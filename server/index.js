import Express from 'express';
import routes from './routes.js';

const startPagePath = '../dist/index.html';
const port = 80;

const app = new Express();
app.use(Express.static('../dist'));

// Return start page HTML
app.get(routes.ROOT, (req, res) => {
    res.sendFile(startPagePath);
});

// Make new user
app.post(routes.CREATE_USER, (req, res) => {

});

app.get(routes.CONVERSATIONS, (req, res) => {

});

app.listen(port, () => {
    console.log("Listening on " + port);
});

