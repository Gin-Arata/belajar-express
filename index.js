import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Pages');
});

app.get('/testing', (req, res) => {
    res.send('test Pages');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});