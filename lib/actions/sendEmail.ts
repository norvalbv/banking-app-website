"use server";

import nodemailer from 'nodemailer';

type SendEmailProps = {
  name: string;
  email: string;
  message: string;
};

const { HOSTINGER_EMAIL, HOSTINGER_EMAIL_PASSWORD } = process.env;

if (!HOSTINGER_EMAIL || !HOSTINGER_EMAIL_PASSWORD) {
  throw new Error('Environment variables are not set.');
}

const sendEmail = async ({ name, email, message }: SendEmailProps): Promise<{ ok: boolean }> => {
  // Configure your transporter for Hostinger Business Email with SMTP support
  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // SMTP server
    port: 465, // SMTP port for SSL
    secure: true, // use SSL
    auth: {
      user: HOSTINGER_EMAIL,
      pass: HOSTINGER_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: HOSTINGER_EMAIL, // Use your Hostinger email as the sender
    to: HOSTINGER_EMAIL, // your receiving email
    replyTo: email, // Set the reply-to address to the sender's email
    subject: `New message from ${name}`,
    text: `From: ${name} (${email})\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { ok: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { ok: false };
  }
};

export default sendEmail;