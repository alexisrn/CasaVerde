import * as S from '../styles/home';
import FirtsBanner from '@/components/FirstBanner';
import MyPlant from '@/components/MyPlant';
import Offer from '@/components/Offer';
import { useEffect, useState } from 'react';
import Footer from '@/components/template/Footer';

export default function Home() {
  
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const getPlants = async () => {
      try{
        const res = await fetch('http://localhost:3000/api/plants')
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
      <Footer />
      </S.Container>
    </>
  );
}

    