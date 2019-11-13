const express = require('express');
const app = express();
const port = 3003;

app.use('/', express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () =>
  console.log(`Justin's PortFolio site listening on port ${port}!`)
);
