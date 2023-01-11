require('dotenv').config();
const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');
const db = require('../src/config');
const routes = require("../src/routes")
var path = require('path');

db.connect();

//Body -parse
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(cors());

routes(app);
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`)
})