const express = require("express");
const app = express();
const PORT = 1907;

const routes = [
    { route: '/', directory: 'root' }
]

for (let { route, directory } of routes) {
    app.use(route, express.static(__dirname + `/pages/${directory}`));
}

app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/pages/error/error.html");
});


app.listen(PORT, () => {
    console.log(`Server now running at http://localhost:${PORT}/.`);
});
