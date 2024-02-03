import type { NextApiRequest, NextApiResponse } from 'next';
import sendEmail from '../../../service/nodemailer';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      await sendEmail(email);
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).json({ error: 'Erro ao enviar o e-mail.' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}