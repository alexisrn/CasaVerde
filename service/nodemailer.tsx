import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import dotenv from 'dotenv';

dotenv.config();

// Função para enviar e-mails
const sendEmail = async (recipientEmail: string) => {
  try {
    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_SERVICE,
          pass: process.env.EMAIL_PASSWORD,
        },
      })
    );

    const mailOptions = {
      from: 'atruecompany@gmail.com',
      to: recipientEmail,
      subject: 'Bem-vindo à Casa Verde!',
      text: `Olá, ${recipientEmail}.\n\nBoas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.\n\nAté logo!`,
    };

    // Envio do e-mail
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
  }
};

export default sendEmail;