import * as S from './styles'

export default function MyPlant(){
    return(
        <>
        <S.Container>
            <S.CtnImg> <img src="images/plantation.png" alt='plantação' /></S.CtnImg>

            <S.CtnContent>
            <span> Como conseguir </span>
            <h2> Minha Planta</h2>

            <S.CtnList>
            <S.ItemList><S.Ball></S.Ball><span>Escolha Suas Plantas</span></S.ItemList>
            <S.ItemList><S.Ball></S.Ball><span>Faça seu pedido</span></S.ItemList>
            <S.ItemList><S.Ball></S.Ball><span>Aguarde na sua casa</span></S.ItemList>
            </S.CtnList>

        </S.CtnContent>


        </S.Container>  
        </>
    )
}