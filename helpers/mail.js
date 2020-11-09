const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const nodemailer = require('nodemailer');

module.exports = {
    sendMail: (data) => {
        console.log('The data', data)
        let template;
        let mailOptions;
        template = `
        <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
        
        </head>
        <div style="background: #fff; overflow: hidden;">

             <Header style="padding: 10px; background-color: #e40521; color: #fff">
                <h1 style="margin-bottom: 0">Saint Stephen</h1>
            </header>

                <div style="padding: 20px 10px 10px 10px; background-color: #ffe9e9;">
              
                <strong>Hello ${data.name},</strong>
            
                <P>Thank you for stopping by. Your message was sent successfully and I will get back to you soon.</P>

                <P>You can get back to me by replaying to this mail or whatsapp me on: <strong>+2348061578814</strong></P>

                </div>   
              </div>     
        </html>`;
        let from = 'noreply@saint-portfolio.herokuapp.com';
        if (process.env.NODE_ENV != 'production') {
            from = `noreply@localhost:4500`;
        }
        mailOptions = {
            from: `"St. Stephen | full-stack developer" <${from}/>`,
            to: data.email,
            subject: `Thanks for stopping by`,
            // text: '- Welcome',
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