import express from 'express';
import cors from 'cors';

const PORT = 5000;
const users = [];
const tweetPost = [];
const reverseUsers = users.slice(0).reverse();
const reverseTweetPost = tweetPost.slice(0).reverse();

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
    const lastTweets = tweetPost.slice(-10);
    const tweetsWithAvatar = lastTweets.map(tweet => {
        const user = users.find(user => user.username === tweet.username);
        return { ...tweet, avatar: user.avatar };
    });
    res.send(tweetsWithAvatar);
});

server.post('/tweets', (req, res) =>{
    if(req.body.username === ''){
        return res.status(401).send('UNAUTHORIZED');
    };

    tweetPost.push(req.body);
    res.send(tweetPost);
});