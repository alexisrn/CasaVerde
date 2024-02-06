import * as S from './styles'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function Footer(){
    return(
        <>
        <S.Container>
        <S.CtnMidias>
            <S.CircleMidia><a href="https://www.linkedin.com/in/raphael-alexis-3704531b9/" target='_blank'><FaLinkedinIn /></a></S.CircleMidia>
            <S.CircleMidia><a href="https://github.com/alexisrn" target='_blank'><FaGithub /></a></S.CircleMidia>
            <S.CircleMidia><a href="" target='_blank'><FaInstagram /></a></S.CircleMidia>
        </S.CtnMidias>
            <S.TextDev>Desenvolvido para desafio #7DaysOfCode </S.TextDev>
            <S.TextCopy>&copy;2024 Raphael Alexis</S.TextCopy>
        </S.Container>
        </>
    )
}