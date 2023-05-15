const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anilnodemailer@gmail.com',
      pass: 'Akp@21071999'
    }
  });

  const mailOptions = {
    from: 'anilnodemailer@gmail.com',
    to: 'anillakhlan2107@gmail.com',
    subject: 'Nodemailer Test',
    text: 'Test'
  }

transporter.sendMail(mailOptions, (err, info)=>{
    if(err) console.log(err)
    console.log(info)
})