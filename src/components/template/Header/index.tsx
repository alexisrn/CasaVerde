import { IconLogo, hambMenu } from '@/components/icons';
import * as S from './styles';
import MenuItem from '@/components/MenuItem';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebard } from '../SideBar';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sidebar, setSidebar] = useState(false);

  const showSidebard = () => setSidebar(!sidebar);

  useEffect(() => {
    const handleScrollLock = () => {
      if (sidebar) {
        // Desativar o scroll quando o aside estiver aberto
        document.body.style.overflow = 'hidden';
      } else {
        // Habilitar o scroll quando o aside estiver fechado
        setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 200); 
      }
    };

    // Adicionar o listener quando o componente montar
    window.addEventListener('scroll', handleScrollLock);
    // Remover o listener quando o componente desmontar
    return () => {
      window.removeEventListener('scroll', handleScrollLock);
    };
  }, [sidebar]);


     useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <S.Container scrollPosition={scrollPosition} >
      <S.Content>
        <S.Image>{IconLogo}</S.Image>

        <S.Menu>
        <MenuItem title="Como fazer" url="/" />
                /
        <MenuItem title="Ofertas" url="/" />
                /
        <MenuItem title="Depoimentos" url="/" />
                /
        <MenuItem title="Videos" url="/" />
                /
        <MenuItem title="Meu carrinho" url="/" />
        </S.Menu>

        <S.HambMenu >
          <GiHamburgerMenu onClick={showSidebard} />
          
          {sidebar && <Sidebard active={setSidebar} />}
          
          </S.HambMenu>
      </S.Content>
      </S.Container>
    </>
  );
}
