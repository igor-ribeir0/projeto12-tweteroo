import express from 'express';
import cors from 'cors';

const PORT = 5000;
const users = [];
const tweetPost = [];

const server = express();
server.use(express.json());
server.use(cors());
server.listen(PORT);

server.get('/sign-up', (req, res) => {
    res.send(users);
});

server.post('/sign-up', (req, res) => {
    users.push(req.body);
    res.status(201).send('OK');
});

server.get('/tweets', (req, res) => {
    res.send(tweetPost);
});

server.post('/tweets', (req, res) =>{
});