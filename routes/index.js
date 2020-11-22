const { json } = require('body-parser');
const Message = require('../database/models/messages');
const { sendMail } = require('../helpers/mail');
let base_api = 'http://sandbox-cashierapi.opayweb.com/api/v3';
const axios = require('axios');
const { makePayment, resolveUserBank, getCountries, getBanks } = require('../middleware');

module.exports = (app) => {
    // make payment
    app.post('/api/product/pay', makePayment, (req, res) => {

        // Probably save details to database or something...
        let data = {
            cashierUrl: req.cashierUrl,
            orderNo: req.orderNo,
            amount: req.amount,
            currency: req.currency,
            reference: req.reference,
        }
        res.status(200).json({ message: 'Successful', cashierUrl: req.cashierUrl });
    });

    // get countries
    app.get('/api/countries', getCountries, (req, res) => {
        res.status(200).json({ message: 'Got countries', countries: req.countries });
    });


    // get banks
    app.get('/api/banks', getBanks, (req, res) => {
        res.status(200).json({ message: 'Got banks', banks: req.banks });
    });

    app.post('/api/transfer', resolveUserBank, (req, res) => {
        res.status(200).json({ message: 'Successful transfer', accountNo: req.accountNo, accountName: req.accountName });
    });

    app.post('/api/validate-bank-account', resolveUserBank, (req, res) => {
        res.status(200).json({ message: 'Got bank', accountNo: req.accountNo, accountName: req.accountName });
    });

    // Get messages
    app.get('/api/products/opay-callback', (req, res) => {
        console.log('The callback', 'Reg:', req.body);
        res.status(200).json({ message: 'Successful' });
    });




}