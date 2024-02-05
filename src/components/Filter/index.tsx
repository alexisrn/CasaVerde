import React from 'react';
import * as S from './styles';

interface PriceFilterProps {
  priceRange: { min: number; max: number };
  onChange: (newRange: { min: number; max: number }) => void;
}

const PriceFilter = ({ priceRange, onChange }:PriceFilterProps) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ min: parseInt(e.target.value), max: priceRange.max });
  };

  const handleMaxChange = (e:any) => {
    onChange({ min: priceRange.min, max: parseInt(e.target.value) });
  };

  return (
    <S.Container>
      <S.Label htmlFor="minPrice">Preço Min:</S.Label>
      <S.Input type="number" id="minPrice" value={priceRange.min} onChange={handleMinChange} />
      <S.Label htmlFor="maxPrice">Preço Max:</S.Label>
      <S.Input type="number" id="maxPrice" value={priceRange.max} onChange={handleMaxChange} />
    </S.Container>
  );
};

export default PriceFilter;