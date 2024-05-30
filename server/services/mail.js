const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD
  }
});

const sendEmail =  (to,title,body)=>{
  const mailOptions = {
      from: 'הרוב קובע🤟 <'+process.env.EMAIL_ADDRESS+'>' ,
      to: to,
      subject: title,
      html: body
  }
  return transporter.sendMail(mailOptions);
}


const sendEmailToUser = (to,title,body)=>{
    console.log("mail!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  sendEmail(to,title,body)
      .then(info => {
          console.log('Email sent: ', info.response);
          return true
      })
      .catch(error => {
          console.log('Error sending email: ', error);
          return false
      });
}

module.exports = sendEmailToUser