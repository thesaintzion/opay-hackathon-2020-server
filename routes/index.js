const Message = require('../database/models/messages');
const { sendMail } = require('../helpers/mail')

module.exports = (app) => {

    // Get messages
    app.get('/api/message/get', (req, res) => {
        Message.find({}).sort({ createdAt: -1 }).then(messages => {
            if (messages.length > 0) {
                res.status(203).json({ messages });
            } else {
                res.status(404).json({ message: 'No record found' });
            }
        }).catch(err => {
            console.log('Error getting messages', err);
            res.status(500).json({ message: 'Oops..!! Something is not right.. please try later' });
        });
    });


    // Get messages
    app.post('/api/message/post', (req, res) => {
        const { name, email, message } = req.body;
        if (!name || name.toString().trim() == '') {
            res.status(400).json({ message: 'Please provide a valid name' });
        } else if (!email || email.toString().trim() == '') {
            res.status(400).json({ message: 'Please provide a valid email' });
        } else if (!message || message.toString().trim() == '') {
            res.status(400).json({ message: 'Please provide a valid message' });
        } else {
            // 01. Save masses to db
            Message.create(req.body).then(created => {

                sendMail(req.body);
                res.status(200).json({ message: 'Good job here ' + name })

            }).catch(err => {
                // if()
                console.log('Error creating message');
                if (err.code === 11000) {
                    res.status(409).json({ message: 'Oops..!! email already exists...;' });
                } else {
                    res.status(500).json({ message: 'Oops..!! Something is not right.. please try later' });
                }

            });
        }
    });
}