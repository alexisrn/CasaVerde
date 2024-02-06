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
