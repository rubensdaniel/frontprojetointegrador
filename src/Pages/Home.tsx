
//import { Link } from 'react-router-dom';
import Header from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';
import HomeCard1 from './HomeCard1';
import HomeCard2 from './HomeCard2';
//import '../Style/Home.css';
import { produtosDados } from "../Dados/Produtos";
import Hero from './Hero';

function Home() {
  // Pegamos os nomes únicos de produtos
  const nomesUnicos = [...new Set(produtosDados.map(item => item.nome))];
  // Função para criar slug igual suas rotas (sem espaços, minúsculo)
  const toSlug = (text: string) => 
    text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '');

  return (
    <div className='home-container'>  
      <Header />
      <HomeCard1 />
      <HomeCard2 />
      <Rodape />
    </div>
  );
};

export default Home;

