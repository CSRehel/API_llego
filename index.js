const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config/config');
const routerApi = require('./routes/index');
const { errorHandler } = require('./middleware/error');

// middleware
app.use(cors());
app.use(express.json());

// router
routerApi(app);

// error middleware
app.use( errorHandler );

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(config.port, console.log(`SERVER ON PORT ${config.port}`));