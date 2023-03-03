const express = require("express");
const app = express();
const PORT = 5000;

const routes = [
    { route: '/', directory: 'testing' }
]

for (let { route, directory } of routes) {
    app.use(route, express.static(__dirname + `/sites/${directory}`));
}

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/sites/error/error.html");
});


app.listen(PORT, () => {
    console.log(`Server now running at http://localhost:${PORT}/.`);
});