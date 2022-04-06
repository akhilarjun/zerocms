const express = require('express');
const app = express();
const port = 3000 || env.PORT;
const chalk = require('chalk');
const bcrypt = require('bcryptjs');

const path = require('path');
const { env } = require('process');

/*app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/index.html"));
});

app.listen(port, () => {
  console.log(chalk.green("Server started!"));
});*/

let store = {};

let hashIt = (str, key) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(str, salt);
    console.log('HASHED: ' + hash);
    store[key] = hash;
};

hashIt('password', 'pass1');
hashIt('password', 'pass2');

bcrypt.compare('password', store.pass2, (err, isMAtched) => {
    if (err) {
        throw err;
    }
    if (isMAtched) {
        console.log('Matched');
    } else {
        console.log('not matched');
    }
});
