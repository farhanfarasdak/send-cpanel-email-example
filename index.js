const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.codingday.tech",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'farhan@codingday.tech', // generated ethereal user
      pass: '...', // your cPanel email password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Farhan from Coding Day - Testing" <farhan@codingday.tech>', // sender address
    to: "yourreceiveremail1@gmail.com,yourreceiveremail2@domain.com", // list of receivers
    subject: "This is Coding Day Send Email Example", // Subject line
    text: "Coding Day?", // plain text body
    html: "<h1>Coding Day</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);