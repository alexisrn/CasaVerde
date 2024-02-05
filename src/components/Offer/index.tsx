import * as S from './styles'
import Card from '../Card';
import { useEffect, useState } from 'react';
import ButtonSort from '../ButtonSort';

export default function Offer(props:any){
  const [sortedPlants, setSortedPlants] = useState([...props.plants]);
  const [sort, setSort] = useState<'name' | 'price'>('name')

  useEffect(() => {
    const newSortedPlants = [...props.plants];
    newSortedPlants.sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sort === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
    setSortedPlants(newSortedPlants);
  }, [props.plants, sort]);

  const handleSort = (newSortBy: 'name' | 'price') => {
    setSort(newSortBy);
  };
    
    return(
        <>
        <S.Container>
            <span>Conheça nossas</span>
            <h2>ofertas</h2>

                        <S.CtnBtn>
                        <ButtonSort onClick={() => handleSort('name')} label='Filtrar por nome' />
                        <ButtonSort onClick={() => handleSort('price')} label='Filtrar por preço' />
                        </S.CtnBtn>
              
              
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