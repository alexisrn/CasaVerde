import * as S from './styles'
import Card from '../Card';
import { useEffect, useState } from 'react';
import ButtonSort from '../ButtonSort';
import PriceFilter from '../Filter';

export default function Offer(props:any){
  const [sortedPlants, setSortedPlants] = useState([...props.plants]);
  const [sort, setSort] = useState<'name' | 'price'>('name')
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100 });

  useEffect(() => {
    const newSortedPlants = [...props.plants];
  
    // Aplica o filtro de intervalo de preço
    const filteredPlants = newSortedPlants.filter((plant) => {
      return plant.price >= priceRange.min && plant.price <= priceRange.max;
    });
  
    // Aplica a ordenação
    filteredPlants.sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sort === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
  
    setSortedPlants(filteredPlants);
  }, [props.plants, sort, priceRange]);

  const handleSort = (newSortBy: 'name' | 'price') => {
    setSort(newSortBy);
  };
    
    return(
        <>
        <S.Container>
            <span>Conheça nossas</span>
            <h2>Plantas</h2>

                        <S.CtnBtn>
                        <ButtonSort onClick={() => handleSort('name')} label='Filtrar por nome' />
                        <ButtonSort onClick={() => handleSort('price')} label='Filtrar por preço' />
                        </S.CtnBtn>
                        <PriceFilter priceRange={priceRange} onChange={setPriceRange}/>
              
              
              <div>
            <S.CtnCard>
            {sortedPlants
          ? sortedPlants.map((item:any, i:any) => {
              return (
                <>
               <Card key={i} name={item.name} price={item.price} image={item.image} />
                </>
              );
            })
          : null}
            </S.CtnCard>
            
          </div>

        </S.Container>
        </>
    )
}