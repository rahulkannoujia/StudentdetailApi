const express = require('express');


const bodyParser = require('body-parser');
const { usercontroller } = require('./controllers/usercontroller');
const usermodels = require('./models/usermodels');
const routes = require('./routes/userroutes');


const port = process.env.PORT || 8080;
const app = express();


require('./database')();

app.use(bodyParser.json());


app.use('/api',routes);


app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`));