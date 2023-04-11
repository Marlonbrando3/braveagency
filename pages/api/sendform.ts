// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer')

const working = '{"info":"działa"}'
const noworking = '{"info":"niedziała"}'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  let transporter = await nodemailer.createTransport({
    port: 465,
    host: "mail-serwer141299.lh.pl",
    // secure: true,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.MAIL, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  })

  await transporter.verify(function (error:any, success:any) {
    if (error) {
        console.log(error);
        // return res.json({info:"nie działa bo: "+error})
    } else {
        console.log("Server is ready to take our messages");
        // return res.json({info:"działa: "+success})
    }})


  const mailData = {
    from: req.body.email,
    to: process.env.MAIL,
    subject: `Wiadomość ze strony od: ${req.body.name}`,
    text: "Hello. This email is for your email verification.",
    html: 
    `Imię i nazwisko / firma: ${req.body.name}`+`<br>`+
    `Email kontaktowy: ${req.body.email}`+`<br>`+
    `Telefon kontaktowy: ${req.body.phone}`+`<br><br>`+
    `Wiadomość ${req.body.msg}`+`<br>`
  }

  await transporter.sendMail(mailData, function (err:string, info:string) {
    console.log("wysyłam")
    if(err){
      console.log("błąd: " +err)
      return res.json(JSON.parse(working))
    }
    else{
      console.log("działa")
      return res.json(JSON.parse(noworking))
  }})
  // res.status(200).json({ name: req.body.name })
}