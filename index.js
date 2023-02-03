const express = require('express');
const cors = require('cors');

const {
    errorHandler,
    boomErrorHandler
} = require('./middleware/error');

const { config } = require('./config/config');
const routerApi = require('./routes/index');
const app = express();

/////////////////////////////////////////////////////////////////////////////////

app.use(express.json());
app.use(cors());

/////////////////////////////////////////////////////////////////////////////////

routerApi(app);

app.get('*', (req, res) => {
    res.sendStatus(404);
});

app.use(boomErrorHandler, errorHandler);

app.listen(config.port, console.log(`SERVER ON PORT ${config.port}`));