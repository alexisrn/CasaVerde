import Header from '@/components/template/Header';
import * as S from '../styles/home';
import FirtsBanner from '@/components/FirstBanner';
import MyPlant from '@/components/MyPlant';
import Offer from '@/components/Offer';
import { useEffect, useState } from 'react';

export default function Home() {
  
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const getPlants = async () => {
      try{
        const res = await fetch('https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw?utm_medium=email&_hsmi=231361624&_hsenc=p2ANqtz-_ElKpIpm-HdHgXaNoUK6slVbINmuX_foN4UXm8X-UC3LLT-jHzZPv9QTuK5MfGeEQRUhyQvGe1A3QMzSneb8KuI5qv4_bm_uorKGdbThjtauXnje4&utm_content=231361624&utm_source=hs_automation')
        const  data = await res.json();

        const dataFilter = data.filter((item:any) => item.ordem !== 0);

        setPlants(dataFilter);
      } catch(erro){
        console.error('Error ao buscar dados')
      }
    }
    getPlants();
  },[])

  return (
    <>
      <S.Container>
      <FirtsBanner />
      <MyPlant />
      <Offer plants={plants}/>
      </S.Container>
    </>
  );
}
