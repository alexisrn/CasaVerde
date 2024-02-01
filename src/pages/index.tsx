import Header from '@/components/template/Header';
import * as S from '../styles/home';
import FirtsBanner from '@/components/FirstBanner';
import MyPlant from '@/components/MyPlant';
import Offer from '@/components/Offer';

export default function Home() {
  return (
    <>
      <S.Container>
      <FirtsBanner />
      <MyPlant />
      <Offer />
      </S.Container>
    </>
  );
}
