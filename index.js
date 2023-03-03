const express = require("express");
const app = express();
const PORT = 5000;

app.use('/', express.static('sites/testing'));

app.listen(PORT, () => {
    console.log(`Server now running at http://localhost:${PORT}/.`);
});