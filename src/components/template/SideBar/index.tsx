import * as S from './styles';
import { AiOutlineHome, AiOutlineClose }  from 'react-icons/ai'
import { BiHomeHeart } from 'react-icons/bi'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri'
import MenuItem from '@/components/MenuItem';
import { IconLogo } from '@/components/icons';



export const Sidebard = ( {active}:any) => {
    const closeSidebar = () => {
        active(false)
    }


  
  return (
    < >
        <S.Container sidebar={active}>
         <S.BtnClose onClick={closeSidebar}> <AiOutlineClose /> </S.BtnClose>

          <S.MenuList>
          <S.Logo >{IconLogo}</S.Logo>

            <S.List>
            <MenuItem onClick={closeSidebar} title="Como fazer" url="/"/>
            <MenuItem  onClick={closeSidebar} title="Ofertas" url="/"/>
            <MenuItem onClick={closeSidebar} title="Depoimentos" url="/"/>
            <MenuItem onClick={closeSidebar} title="Videos" url="/"/>
            <MenuItem onClick={closeSidebar} title="Meu carrinho" url="/"/>
            </S.List>
            
          </S.MenuList>
        </S.Container>
    
    </>
  )
}