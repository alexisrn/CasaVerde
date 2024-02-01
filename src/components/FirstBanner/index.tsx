import { useEffect, useState } from 'react';
import Newsletter from '../Newsletter';
import { vector } from '../icons';
import Header from '../template/Header';
import * as S from './styles';

export default function FirtsBanner() {

 

  return (
    <>
      <S.Container>
        <Header />
        <S.Vector>{vector}</S.Vector>

        <S.Content>
          <S.CtnContent>
            <span>Sua casa com as</span>
            <h2>Melhores Plantas</h2>

            <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </p>

            <Newsletter />
          </S.CtnContent>


          <S.CtnImage><img  className="w-auto h-auto" src='images/flower.png' /></S.CtnImage>
        </S.Content>
        
      </S.Container>
    </>
  );
}
