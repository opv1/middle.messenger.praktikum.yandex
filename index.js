const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`));

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`);
});

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
