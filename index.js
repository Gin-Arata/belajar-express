import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Pages');
});

app.get('/users', (req, res) => {
    res.send('GET User');
});

app.post('/users', (req, res) => {
    res.send('POST User');
});

app.put('/users', (req, res) => {
    res.send('PUT User');
});

app.delete('/users', (req, res) => {
    res.send('Delete User');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});