import * as express from 'express';
const cors = require("cors");
const app = express();
const pool = require("./app/database");
const bodyParser = require('body-parser')
app.use(express.json())
app.use(cors());

app.use('/', pool);

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: false}))

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
