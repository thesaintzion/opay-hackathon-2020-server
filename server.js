"use strict";
require('dotenv').config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const staticView = path.join('./public');

// Middleware
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', extended: false, parameterLimit: 1000000 }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet());

if (process.env.NODE_ENV !== 'production') {
    const morgan = require('morgan');
    app.use(morgan('short'));
}

// Includes
require('./database/db');
require('./routes/index')(app);
// Static file
app.use(express.static(staticView));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const PORT = process.env.PORT || 4500;
server.listen(PORT, function() {
    console.log("App listen on port: " + PORT);
});