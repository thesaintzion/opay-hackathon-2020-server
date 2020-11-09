const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const nodemailer = require('nodemailer');

module.exports = {
    sendMail: (data) => {
        let template;
        let mailOptions;
        template = `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        </head>
    
        <div style="background: #fff; overflow: hidden;">

             <Header style="padding: 10px; background-color: #e40521; color: #fff">
                <h5 style="margin-bottom: 0">Saint Stephen</h5>
            </header>

                <div style="padding: 20px 10px 10px 10px; background-color: #ffe9e9;">
               <strong>Dear,</strong>
               
                <p>I'm are using this medium to say thank you for stopping by.... </p>

                </div>   
              </div>     
        </html>`;
        let from = 'noreply@aimart.herokuapp.com';
        if (process.env.NODE_ENV != 'production') {
            from = `noreply@localhost:4200`;
        }
        mailOptions = {
            from: `Saint Stephen`,
            to: 'faithrejoice777@gmail.com',
            subject: `Thanks for stopping by`,
            text: '- Welcome',
            html: template,
            headers: {
                priority: 'high'
            }
        };


        // Begin
        const myOAuth2Client = new OAuth2(
            process.env.SEND_MAIL_CLIENT_ID,
            process.env.SEND_MAIL_CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        )

        myOAuth2Client.setCredentials({
            refresh_token: process.env.SEND_MAIL_REFRESH_TOKEN
        });

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.SEND_MAIL_USER,
                clientId: process.env.SEND_MAIL_CLIENT_ID,
                clientSecret: process.env.SEND_MAIL_CLIENT_SECRET,
                refreshToken: process.env.SEND_MAIL_REFRESH_TOKEN,
                accessToken: process.env.SEND_MAIL_ACCESS_TOKEN
            }
        });

        transport.sendMail(mailOptions).then(response => {
                console.log('Email Sent successfully..: ' + response.response);
            })
            .catch(err => {
                console.log('ERROR SENDING EMAIL: ' + err);
            });

    }
}