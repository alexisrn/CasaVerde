import React, { useState } from 'react';
import styled from 'styled-components';

const PlantListContainer = styled.div`
  /* Estilos para o container da lista de plantas */
`;

const PlantItem = styled.div`
  /* Estilos para cada item da lista de plantas */
`;

interface Plant {
    id: string;
    name: string;
    price: number;
    preco: number | string
  }

const PlantList: React.FC<{ plants: Plant[] }> = ({ plants }) => {
  const [sortedPlants, setSortedPlants] = useState(plants);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 100 });
  const [sort, setSort] = useState<'name' | 'price'>('name');

  const handleSort = (type: 'name' | 'price') => {
    const sorted = [...sortedPlants].sort((a, b) => {
      if (type === 'name') {
        return a.name.localeCompare(b.name);
      } else if (type === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
    setSortedPlants(sorted);
  };

  const handleFilter = () => {
    const filtered = plants.filter((plant) => plant.price >= priceFilter.min && plant.price <= priceFilter.max);
    setSortedPlants(filtered);
  };

  return (
    <PlantListContainer>
      <div>
        <button onClick={() => handleSort('name')}>Ordenar por Nome</button>
        <button onClick={() => handleSort('price')}>Ordenar por Preço</button>
      </div>
      <div>
        <label>Intervalo de Preço:</label>
        <input
          type="range"
          min={0}
          max={100}
          value={priceFilter.max}
          onChange={(e) => setPriceFilter({ ...priceFilter, max: +e.target.value })}
        />
        <span>{priceFilter.max}</span>
        <button onClick={handleFilter}>Filtrar</button>
      </div>
      {sortedPlants.map((plant) => (
        <PlantItem key={plant.id}>
          {/* Renderizar detalhes da planta */}
          <p>{plant.name}</p>
          <p>{plant.preco}</p>
        </PlantItem>
      ))}
    </PlantListContainer>
  );
};

export default PlantList;