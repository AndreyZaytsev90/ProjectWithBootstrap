const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

const books = [
    {
        name: 'AngularJS'
    },
    {
        name: 'EmberJS'
    },
    {
        name: 'ReactJS'
    }
];

app.get('/books', function (req, res) {
    res.send(books);
});

app.post('/books', function (req, res) {
    books.push({
        name: req.body.name
    });
    res.send(200);
});

const server = app.listen(3001, function () {
    console.log('backend started');
});