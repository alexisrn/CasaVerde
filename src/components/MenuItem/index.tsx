import Link from "next/link"
import * as S from './styles'

interface MenuItemProps{
    title:string
    url:string,
}


export default function MenuItem(props:MenuItemProps){
    return(
        <>
        <S.Container>
        <Link href={props.url}>
        <S.ItemMenu>{props.title}</S.ItemMenu>
        </Link>
        </S.Container>
        </>
    )
}