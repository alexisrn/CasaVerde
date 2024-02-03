import { useState } from 'react';
import { letter } from '../icons';
import * as S from './styles'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Newsletter() {
  const notify = () => toast(`E-mail encaminhado para: ${email}`)
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Expressão regular para validar o formato do e-mail
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail.trim());

    // Atualizar estado de erro e validade do e-mail
    setEmailError(isValid ? '' : 'Por favor, digite um e-mail válido.');
    setIsEmailValid(isValid);
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setIsSubmitting(true);
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
        setIsEmailValid(false);
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
     onChange={handleEmailChange}
     />
     <S.Btn 
  
     disabled={!isEmailValid || isSubmitting} 
     type='submit'>
      Assinar newsletter
      
    </S.Btn>
     
      </S.Container>
    </>
  );
}
