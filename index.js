import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Pages');
});

app.get('/users/:userId', (req, res) => {
    res.send('GET User ' + req.params.userId);
});

app.post('/users/:userId', (req, res) => {
    res.send('POST User ' + req.params.userId);
});

app.put('/users/:userId', (req, res) => {
    res.send('PUT User ' + req.params.userId);
});

app.delete('/users/:userId', (req, res) => {
    res.send('Delete User ' + req.params.userId);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});