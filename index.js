const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

app.use(bodyParser.json());

sequelize.sync().then(() => {
    console.log('db is ready')
})

const routes = require('./routes/GitUserRoute');
app.use(`/user`, routes);

app.listen(3000, console.log('server started'));