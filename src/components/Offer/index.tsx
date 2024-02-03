import * as S from './styles'
import Card from '../Card';

export default function Offer(props:any){

    
    return(
        <>
        <S.Container>
            <span>Conheça nossas</span>
            <h2>ofertas</h2>

              <div>
            <S.CtnCard>
            {props.plants
          ? props.plants.map((item:any, i:any) => {
              return (
                <>
               <Card key={i} name={item.name} price={item.preco} image={item.image} />
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