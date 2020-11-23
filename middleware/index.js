let base_api = 'http://sandbox-cashierapi.opayweb.com/api/v3';
const axios = require('axios');
const RequestIp = require('@supercharge/request-ip');

module.exports = {
    // Make payment
    makePayment: (req, res, next) => {
        try {
            const ip = RequestIp.getClientIp(req);
            const { name, price, id, phone } = req.body;
            if (!name || !price) {
                res.status(400).json({ message: 'Oops..!! Price and name are required' });
            } else {
                let callbackUrl = 'http://opay-hackathon-2020.herokuapp.com/api/products/opay-callback';
                let returnUrl = 'https://opay-hackathon-2020.herokuapp.com/page/products';

                if (process.env.NODE_ENV !== 'production') {
                    callbackUrl = 'http://localhost:4500/api/products/opay-callback';
                    returnUrl = 'http://localhost:4200/page/products';
                }

                const data = {
                    "reference": `ref-${Math.ceil(Math.random() * 10e13)}`,
                    "mchShortName": "St. Shopy Supermaket",
                    "productName": name,
                    "productDesc": "Good product",
                    "userPhone": "+2348131393827",
                    "userRequestIp": ip,
                    "amount": price * 100,
                    "currency": "NGN",
                    "payTypes": ["BalancePayment", "BonusPayment", "OWealth"],
                    // "payMethods": ["account", "qrcode", "bankCard", "bankAccount"],
                    "payMethods": ["account", "bankCard"],
                    "callbackUrl": callbackUrl,
                    "returnUrl": returnUrl,
                    "expireAt": "__"
                }


                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'MerchantId': process.env.OPAY_MID,
                        'Authorization': ['Bearer ', process.env.OPAY_PUBLIC_KEY].join('')
                    },
                    data: JSON.stringify(data),
                    url: `${base_api}/cashier/initialize`,
                };
                axios(options).then(res => {
                    if (res.status.toString() === '200') {
                        if (res.data.data.status === 'SUCCESS') {
                            req.cashierUrl = res.data.data.cashierUrl;
                            req.orderNo = res.data.data.orderNo;
                            req.amount = res.data.data.amount;
                            req.currency = res.data.data.currency;
                            req.reference = res.data.data.reference;
                            next();
                        }
                    } else {
                        res.status(400).json({ message: 'Oops..!! Something went wrong' });
                    }

                }).catch(err => {
                    console.log('Error ', err);
                    res.status(400).json({ message: 'Oops..!! Something went wrong' });
                })
            }

        } catch (err) {
            console.log('Error during payment init:', err);
            res.status(400).json({ message: 'Oops..!! Something went wrong' });
        }
    },

    // Validate bank details
    resolveUserBank: (req, res, next) => {
        try {
            const { bankCode, bankAccountNo, countryCode } = req.body;
            console.log('BODY', req.body);
            if (!bankCode || !bankAccountNo || !countryCode) {
                res.status(400).json({ message: 'Oops..!! bankCode, countryCode and bankAccountNo are required' });
            } else {
                const data = {
                    bankCode,
                    bankAccountNo,
                    countryCode
                }
                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'MerchantId': process.env.OPAY_MID,
                        'Authorization': ['Bearer ', process.env.OPAY_PUBLIC_KEY].join('')
                    },
                    data: JSON.stringify(data),
                    url: `${base_api}/verification/accountNumber/resolve`,
                };
                axios(options).then(res => {
                    if (res.status.toString() === '200') {
                        req.accountNo = res.data.data.accountNo;
                        req.accountName = res.data.data.accountName;
                        next();
                    } else {
                        res.status(400).json({ message: 'Oops..!! Something went wrong' });
                    }

                }).catch(err => {
                    console.log('Error ', err);
                    res.status(400).json({ message: 'Oops..!! Something went wrong' });
                })
            }

        } catch (err) {
            console.log('Error during payment init:', err);
            res.status(400).json({ message: 'Oops..!! Something went wrong' });
        }
    },


    // Make transfers
    doTransfer: (req, res, next) => {
        const { amount, country, currency, bankAccountNumber, bankCode, name, reason } = req.body;
        if (!currency || !country || !amount || !bankAccountNumber || !bankCode || !name || !reason) {
            res.status(400).json({ message: 'Oops..!! currency and country is required' });
        } else {
            try {
                let data = {
                    "amount": amount * 100,
                    "country": country,
                    "currency": currency,
                    "reason": reason,
                    "receiver": {
                        "bankAccountNumber": "3145549577",
                        "bankCode": bankCode,
                        "name": name,
                    },
                    // "reference": `ref-${Math.ceil(Math.random() * 10e13)}`,
                }

                console.log('Data', data);

                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'MerchantId': process.env.OPAY_MID,
                        'Authorization': ['Bearer ', process.env.OPAY_SECRET_KEY].join('')
                    },
                    url: `${base_api}/transfer/toBank`,
                    data: data,
                };


                axios(options).then(res => {
                    if (res.status.toString() === '200') {

                        console.log('RES', res.data);

                        next();
                    } else {
                        console.log('No RES', res.data);
                        res.status(400).json({ message: 'Oops..!! Something went wrong' });
                    }
                }).catch(err => {
                    console.log('Error getting banks', err.response.data);
                    res.status(400).json({ message: 'Oops..!! Something went wrong' });
                })

            } catch (err) {
                console.log('Error during payment init:', err);
                res.status(400).json({ message: 'Oops..!! Something went wrong' });
            }
        }

    },

    // Get countries
    getCountries: (req, res, next) => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'MerchantId': process.env.OPAY_MID,
                    'Authorization': ['Bearer ', process.env.OPAY_PUBLIC_KEY].join('')
                },
                url: `${base_api}/countries`,
            };
            axios(options).then(res => {
                if (res.status.toString() === '200') {
                    req.countries = res.data.data;
                    next();
                }
            }).catch(err => {
                console.log('Error getting countries', err.response);
                res.status(400).json({ message: 'Oops..!! Something went wrong' });
            })

        } catch (err) {
            console.log('Error during payment init:', err);
            res.status(400).json({ message: 'Oops..!! Something went wrong' });
        }
    },


    // Get banks
    getBanks: (req, res, next) => {
        const { countryCode } = req.query;
        if (!countryCode || countryCode == '') {
            res.status(400).json({ message: 'Oops..!! Please provide bank code' });
        } else {
            try {
                let data = {
                    countryCode: countryCode
                }
                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'MerchantId': process.env.OPAY_MID,
                        'Authorization': ['Bearer ', process.env.OPAY_PUBLIC_KEY].join('')
                    },
                    url: `${base_api}/banks`,
                    data
                };
                axios(options).then(res => {
                    if (res.status.toString() === '200') {
                        req.banks = res.data.data;
                        next();
                    } else {
                        res.status(400).json({ message: 'Oops..!! Something went wrong' });
                    }
                }).catch(err => {
                    console.log('Error getting banks', err.response.data);
                    res.status(400).json({ message: 'Oops..!! Something went wrong' });
                })

            } catch (err) {
                console.log('Error during payment init:', err);
                res.status(400).json({ message: 'Oops..!! Something went wrong' });
            }
        }

    },
}