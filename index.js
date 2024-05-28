// required files
const express = require('express');
const bodyParser  =  require("body-parser");

const app = express();
const port = process.env.PORT || 5002;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token,apikey,social_share,chatbot,subfolder');
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
});
require("./router")(app);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});