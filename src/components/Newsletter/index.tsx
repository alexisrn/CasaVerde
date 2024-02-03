import { useState } from 'react';
import { letter } from '../icons';
import * as S from './styles'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Newsletter() {
  const notify = () => toast(`E-mail encaminhado para: ${email}`)
  const [email, setEmail] = useState('')

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        notify();
        setEmail('');
      } else {
        return toast.error('Erro ao enviar o e-mail.')
      }
    } catch (error) {
      return toast.error('Erro ao enviar o e-mail.');
    }
  };

  return (
    <>
      <S.Container onSubmit={handleSubmit}>
      <ToastContainer position='bottom-center' limit={1}/>
     <S.Icon><span>{letter}</span></S.Icon> 
     <S.Input type='email'
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     />
     <S.Btn type='submit'>Assinar newsletter</S.Btn>
     
      </S.Container>
    </>
  );
}
