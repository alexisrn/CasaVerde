import * as S from './styles';

interface CardProps{
    image:string
    name:string,
    price:string | number
}

export default function Card(props:CardProps){
    return(
        <>
        <S.Container >
        <S.Image>
            <img src={`${props.image}`} />
        </S.Image>

        <S.CtnContent>
            <h2 > {props.name}</h2>
            
            <div>
            <S.Price>R$ {props.price}</S.Price>
            <S.Buy>Comprar</S.Buy>
            </div>

        </S.CtnContent>
        </S.Container>
        </>
    )
}