const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

sequelize.sync().then(() => {
    console.log('db is ready')
})

const routes = require('./routes/GitUserRoute');
app.use(`/user`, routes);

app.listen(PORT, console.log('server started'));