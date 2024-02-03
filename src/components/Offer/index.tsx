import { useEffect, useState } from 'react';
import * as S from './styles'
import Card from '../Card';

export default function Offer(){

    
    const [card, setCard] = useState([]);

    const getCards = async () => {
        fetch(`https://casaverde-ten.vercel.app/api/plants`)
          .then((res) => res.json())
          .then((json) => setCard(json));
      };

    useEffect(() => {
        getCards()
    },[])

    return(
        <>
        <S.Container>
            <span>Conheça nossas</span>
            <h2>ofertas</h2>

              <div>
            <S.CtnCard>
            {card
          ? card.map((item:any, i:any) => {
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