import { letter } from '../icons';
import * as S from './styles'


export default function Newsletter() {
  return (
    <>
      <S.Container>
     <S.Icon><span>{letter}</span></S.Icon> 
     <S.Input type='text'/>
     <S.Btn>Assinar newsletter</S.Btn>
      </S.Container>
    </>
  );
}
