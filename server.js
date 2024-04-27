const express = require('express');
const session = require('express-session');
const path = require('path');
const router = express.Router();
const routerDom = require('./routes/routerDom'); 
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;


app.use('/login', router);

// MongoDB pull data
const pullData = require('./mongodb/mongo-pull');
app.use('/', pullData);
app.use('/api/database/pull', router);

//body submit
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//request login form to flask python
const reqData = require('./mongodb/mongo-req');
app.use('/', reqData);
app.use('/api/database/req', router);


const reqLogin = require('./api/local-login/route-login');
app.use('/', reqLogin);
app.use('/api/login', router);
app.use('/isAuthen', router);
app.use('/api/logout', router);



app.use(express.static(path.join(__dirname, 'build')));
app.use('/', routerDom);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
