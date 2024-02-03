import { useState } from 'react';
import { letter } from '../icons';
import * as S from './styles'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Newsletter() {
  
  const [email, setEmail] = useState('')

  const showAlert = (e:any) => {
    e.preventDefault();
    

    if(email === ''){
      return toast.error('Preencha os campos')
    } else{
      alert('Você digitou: ' + email);
    }
  };

  return (
    <>
      <S.Container onSubmit={showAlert}>
      <ToastContainer position='bottom-center' limit={1}/>
     <S.Icon><span>{letter}</span></S.Icon> 
     <S.Input type='email'
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     />
     <S.Btn>Assinar newsletter</S.Btn>
     
      </S.Container>
    </>
  );
}
