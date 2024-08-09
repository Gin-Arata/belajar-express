import express from 'express';
import userRouter from './router/user.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.redirect('/users/1');
});

app.use(userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});