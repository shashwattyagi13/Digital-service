import nodemailer from "nodemailer";
import smtpTransport from 'nodemailer-smtp-transport';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail', 
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: email,
        pass: pass,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    })
  );

export const mailOptions = {
  from: email,
  to: "shashwattyagi988@gmail.com",
  subject: "Hello from Nodemailer", // Email subject
  text: "This is a test email from Nodemailer.", // Email body
};










// export const mailOptions = {
//   from: email,
//   to: "shashwattyagi988@gmail.com",
// };


// import nodemailer from "nodemailer";

// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;

// export const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use Gmail as the service provider
//   auth: {
//     user: email,
//     pass: pass,
//   },
// });

// export const mailOptions = {
//   from: email, // Sender's email address
//   to: "shashwattyagi988@gmail.com", // Recipient's email address
//   subject: "Hello from Nodemailer", // Email subject
//   text: "This is a test email from Nodemailer.", // Email body
// };