import * as express from 'express';
const app = express();
const cors = require("cors");
const pool = require("./app/database");

app.use('/', pool);


app.use(cors());

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
