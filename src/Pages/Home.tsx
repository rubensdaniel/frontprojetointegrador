import Header from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';
import HomeCard1 from './HomeCard1';


function Home() {

  const toSlug = (text: string) => 
    text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '');

  return (
    <div className='home-container'>  
      <Header />
      <HomeCard1 />
      <Rodape />
    </div>
  );
};

export default Home;

