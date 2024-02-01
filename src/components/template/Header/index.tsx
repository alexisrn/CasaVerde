import { IconLogo } from '@/components/icons';
import * as S from './styles';
import MenuItem from '@/components/MenuItem';

export default function Header() {
  return (
    <>
      <S.Container>
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
      </S.Container>
    </>
  );
}
