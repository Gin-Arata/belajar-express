import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.redirect('/users/1');
});

app.get('/users/:userId', (req, res) => {
    const dataUser = [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'Jane Doe',
        },
    ];

    const selectedData = dataUser.find(user => user.id === parseInt(req.params.userId));

    res.json(selectedData);
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