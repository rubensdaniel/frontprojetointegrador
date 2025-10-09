
import { Link } from 'react-router-dom';
import Header from '../Components/Cabecalho';
import '../Style/Home.css';
import { produtosDados } from "../Dados/Produtos";

function HomeCard1() {
  // Pegamos os nomes únicos de produtos
  const nomesUnicos = [...new Set(produtosDados.map(item => item.nome))];
  // Função para criar slug igual suas rotas (sem espaços, minúsculo)
  const toSlug = (text: string) => 
    text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '');

  return (
    <div className='home-container'>  

      <div className='cardProduto'>
        {nomesUnicos.map((nome, index) => {
          const slug = toSlug(nome);
          return (
            <Link
              to={`/grafico/${slug}`}
              key={index}
              className="produto-card-link"
            >
              <div className="nomeProduto">
                {nome}
              </div>
            </Link>
          );
        })}
      </div>


{/* PENSAR EM SEPARAR AS PAGINAS - 
  CARD APENAS NOME PRODUTO 
  CARD COM NOME PRODUTO E MARCA*/}




    </div>
  );
};

export default HomeCard1;

