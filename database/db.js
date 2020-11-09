const mongoose = require('mongoose');

let DB = process.env.MONGO_URL;
if (process.env.NODE_ENV !== 'production') {
    DB = process.env.MONGO_DEV_URL;
}

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(DB, { useUnifiedTopology: true }).then((result) => {
    console.log(`mongo connected`);
}).catch((err) => {
    console.log('mongo NOT connected', err);
});

const conn = mongoose.connection;

module.exports = conn;