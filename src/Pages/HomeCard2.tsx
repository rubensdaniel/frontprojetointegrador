
import { Link } from 'react-router-dom';

import { produtosDados } from "../Dados/Produtos";
import "../Style/HomeCard1.css";

function HomeCard2() {
  // Pegamos os nomes únicos de produtos
  const nomesUnicos = [...new Set(produtosDados.map(item => item.nome))];
  // Função para criar slug igual suas rotas (sem espaços, minúsculo)
  const toSlug = (text: string) => 
    text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '');

    return (
    <div className='product-section'>  
       <div className="product-grid">
         {[...new Map(produtosDados.map(item => [item.marca, item])).values()].map((item, index) => {
          const nomeURL = item.nome
            .toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")  // remove acentos
            .replace(/\s+/g, '');  // remove espaços

          return (
            <Link
              to={`/grafico/${nomeURL}`}
              key={index}
              className="produto-card-link"
            >
              <div className="product-info">
                {item.nome} <br />
                {item.marca}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCard2;


