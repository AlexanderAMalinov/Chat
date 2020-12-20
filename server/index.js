import Express from 'express';

const pagePath = '../dist/index.html';
const port = 80;

const app = new Express();
app.use(Express.static('../dist'));

app.get('/', (req, res) => {
    res.sendFile(pagePath);
});

app.listen(port, () => {
    console.log("Listening on " + port);
});

