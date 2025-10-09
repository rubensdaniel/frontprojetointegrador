
import { Link } from 'react-router-dom';
import Header from '../Components/Cabecalho';
import HomeCard1 from './HomeCard1';
import HomeCard2 from './HomeCard2';
import '../Style/Home.css';
import { produtosDados } from "../Dados/Produtos";

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

    </div>
  );
};

export default Home;

//       <div className='cardProduto'>
//         {nomesUnicos.map((nome, index) => {
//           const slug = toSlug(nome);
//           return (
//             <Link
//               to={`/grafico/${slug}`}
//               key={index}
//               className="produto-card-link"
//             >
//               <div className="nomeProduto">
//                 {nome}
//               </div>
//             </Link>
//           );
//         })}
//       </div>


// {/* PENSAR EM SEPARAR AS PAGINAS - 
//   CARD APENAS NOME PRODUTO 
//   CARD COM NOME PRODUTO E MARCA*/}


//        <div className='cardProduto'>
//          {[...new Map(produtosDados.map(item => [item.marca, item])).values()].map((item, index) => {
//           const nomeURL = item.nome
//             .toLowerCase()
//             .normalize("NFD").replace(/[\u0300-\u036f]/g, "")  // remove acentos
//             .replace(/\s+/g, '');  // remove espaços

//           return (
//             <Link
//               to={`/grafico/${nomeURL}`}
//               key={index}
//               className="produto-card-link"
//             >
//               <div className="nomeProduto">
//                 {item.nome} <br />
//                 {item.marca}
//               </div>
//             </Link>
//           );
//         })}
//       </div>




//////////////////////////////////////////////////////////

// import React from "react";
// import { Link } from "react-router-dom";
// import { produtosDados } from "../Dados/Produtos";

// const Home: React.FC = () => {
//   // Criar lista única de combinações nome + marca
//   const produtosUnicos = Array.from(
//     new Set(produtosDados.map((p) => `${p.nome}|${p.marca}`))
//   ).map((item) => {
//     const [nome, marca] = item.split("|");
//     return { nome, marca };
//   });

//   return (
//     <div>
//       <h1>Gráficos de Produtos por Marca</h1>
//       <ul>
//         {produtosUnicos.map(({ nome, marca }) => (
//           <li key={`${nome}-${marca}`}>
//             <Link to={`/produto/${encodeURIComponent(nome)}/${encodeURIComponent(marca)}`}>
//               {nome} - {marca}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
