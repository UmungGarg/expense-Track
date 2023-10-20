const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database'); 
// const errorController = require('./controllers/error');

const app = express();
var cors = require('cors');

const expRoutes = require('./routes/exp');

app.use(bodyParser.json());
// app.use(express.urlencoded());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/expense', expRoutes);

// app.use(errorController.get404);

sequelize.sync()
.then(result => {
    app.listen(4100);
})
.catch(err => {
    console.log(err);
});
