import Link from "next/link"
import * as S from './styles'

interface MenuItemProps{
    title:string
    url:string,
    onClick?: () => void
}


export default function MenuItem(props:MenuItemProps){
    return(
        <>
        <S.Container onClick={props.onClick}>
        <Link href={props.url}>
        <S.ItemMenu>{props.title}</S.ItemMenu>
        </Link>
        </S.Container>
        </>
    )
}