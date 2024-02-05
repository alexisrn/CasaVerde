import React from 'react';
import * as S from './styles';

interface SortButtonProps {
  onClick: () => void;
  label: string;
}

export default function ButtonSort({ onClick, label }:SortButtonProps){
  return (
    <S.Button onClick={onClick}>
      {label}
    </S.Button>
  );
};
