import nodemailer from 'nodemailer';

export function sendMail(email, password) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abhishekdangi2841@gmail.com',
            pass: 'wrjwsnmzuvqdokvw'
        }
    });

    var mailOptions = {
        from: 'abhishekdangi2841@gmail.com',
        to: email,
        subject: 'Verification mail RoomRent.com by abhishek',
        text: "<h1>Welcome to RoomRent.com</h1><p>You have successfully register to our app, your login credentials are attached on the link below to verify your account</p><h3>Username : " + email + "</h3><h3>Password : " + password + "</h3><h2>Click on the link below to verify your account</h2> http://localhost:3000/verifyuser/" + email
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}