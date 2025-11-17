// import { Link } from "react-router-dom";
// import "../Style/HomeCard1.css";
// import { produtosDados } from "../Dados/Produtos";

// function HomeCard1() {
//   // Nomes únicos de produtos
//   const nomesUnicos = [...new Set(produtosDados.map((item) => item.nome))];

//   // Função para criar slug da URL
//   const toSlug = (text: string) =>
//     text
//       .toLowerCase()
//       .normalize("NFD")
//       .replace(/[\u0300-\u036f]/g, "")
//       .replace(/\s+/g, "");

//   // Monta dados agrupados por nome
//   const produtos = nomesUnicos.map((nome) => {
//     const items = produtosDados.filter((p) => p.nome === nome);

//     // Valores padrão caso não exista categoria ou emoji
//     let categoria = "Alimento";
//     let emoji = "🛒";

//     // Você pode personalizar manualmente:
//     if (nome.toLowerCase().includes("arroz")) emoji = "🍚";
//     if (nome.toLowerCase().includes("feijão")) emoji = "🫘";
//     if (nome.toLowerCase().includes("farinha")) emoji = "🌾";
//     if (nome.toLowerCase().includes("macarrão")) emoji = "🍝";

//     // Converte preço string → número
//     const prices = items.map((p) => ({
//       mercado: p.mercado,
//       preco: Number(String(p.preco).replace(",", ".")),
//     }));

//     const menor = Math.min(...prices.map((p) => p.preco));
//     const maior = Math.max(...prices.map((p) => p.preco));

//     const economia = ((maior - menor) / maior) * 100;
//     const economiaValor = maior - menor;

//     return { nome, categoria, emoji, prices, menor, economia, economiaValor };
//   });

//   return (
//     <section className="product-section">
//       <div className="container">
//         <h2>Produtos em Destaque</h2>
//         <p className="subtitle">Compare preços e veja onde está mais barato</p>

//         <div className="product-grid">
//           {produtos.map((produto, index) => (
//             <Link
//               to={`/grafico/${toSlug(produto.nome)}`}
//               key={index}
//               className="produto-card-link"
//             >
//               <div className="product-card">
//                 <div className="product-image">{produto.emoji}</div>

//                 <div className="product-info">
//                   <span className="category">{produto.categoria}</span>
//                   <h3>{produto.nome}</h3>

//                   <div className="price-list">
//                     {produto.prices
//                       .slice()
//                       .sort((a, b) => a.preco - b.preco)
//                       .map((p, idx) => (
//                         <div
//                           key={idx}
//                           className={`price-row ${idx === 0 ? "best" : ""}`}>
//                           <span>{p.mercado}</span>
//                           <strong>
//                             R$ {p.preco.toFixed(2).replace(".", ",")}
//                           </strong>
//                         </div>
//                       ))}
//                   </div>

//                   <div className="discount">
//                     ⬇️ Economize até{" "}
//                     {produto.economia.toFixed(0)}% (R${" "}
//                     {produto.economiaValor.toFixed(2).replace(".", ",")})
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HomeCard1;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/HomeCard1.css";

// Tipos
interface PrecoAPI {
  mercado: string;
  preco: string;
  peso: string;
  imagem: string;
}

interface RepetidoAPI {
  nomeOrdenado: string;
  exemplo?: string;
  marca: string;
}

interface ProdutoFinal {
  nome: string;
  nomeOrdenado: string;
  marca: string;
  categoria: string;
  emoji: string;
  prices: { mercado: string; preco: number }[];
  menor: number;
  maior: number;
  economia: number;
  economiaValor: number;
}

// Slug seguro
const toSlug = (text?: string) =>
  (text ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");

function HomeCard1() {
  const [produtos, setProdutos] = useState<ProdutoFinal[]>([]);
  const [loading, setLoading] = useState(true);

  // Lista fixa dos produtos desejados
  const itens = [
    { marca: "arroz", peso: "5kg", emoji: "🍚" },
    { marca: "feijao", peso: "1kg", emoji: "🫘" },
    { marca: "macarrao", peso: "500g", emoji: "🍝" },
    { marca: "farinha", peso: "1kg", emoji: "🌾" },
  ];

  useEffect(() => {
    async function carregar() {
      try {
        const lista: ProdutoFinal[] = [];

        for (const item of itens) {
          // 1) busca do mais repetido
          const urlRepetido =
            `http://localhost:3000/produtos/mais-repetidos?limit=1&peso=${item.peso}&marca=${item.marca}`;

          const res = await fetch(urlRepetido);
          const dadosRepetido: RepetidoAPI[] = await res.json();

          if (!dadosRepetido.length) continue;

          const produto = dadosRepetido[0];

          const nomeExibir = produto.exemplo ?? produto.nomeOrdenado;

          // 2) comparação de preços
          const urlPreco =
            `http://localhost:3000/produtos/comparacao-preco/${produto.nomeOrdenado}?peso=${item.peso}`;

          const resPreco = await fetch(urlPreco);
          const precosAPI: PrecoAPI[] = await resPreco.json();

          if (!precosAPI.length) continue;

          // preco string → number
          const prices = precosAPI.map((p) => ({
            mercado: p.mercado,
            preco: Number(p.preco),
          }));

          const menor = Math.min(...prices.map((p) => p.preco));
          const maior = Math.max(...prices.map((p) => p.preco));
          const economia = ((maior - menor) / maior) * 100;
          const economiaValor = maior - menor;

          lista.push({
            nome: nomeExibir,
            nomeOrdenado: produto.nomeOrdenado,
            marca: item.marca,        // 🔥 adicionado
            categoria: "Alimento",
            emoji: item.emoji,
            prices,
            menor,
            maior,
            economia,
            economiaValor,
          });
        }

        setProdutos(lista);
      } catch (err) {
        console.error("Erro ao carregar produtos", err);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  if (loading) {
    return <p style={{ padding: 20 }}>Carregando...</p>;
  }

  return (
    <section className="product-section">
      <div className="container">
        <h2>Produtos em Destaque</h2>
        <p className="subtitle">Compare preços e veja onde está mais barato</p>

        {/* GRID DOS CARDS */}
        <div className="product-grid">
          {produtos.map((produto, index) => (
            <Link
              to={`/grafico/${toSlug(produto.marca)}`}   // 🔥 agora a URL vira /grafico/arroz
              key={index}
              className="produto-card-link"
            >
              <div className="product-card">
                <div className="product-image">{produto.emoji}</div>

                <div className="product-info">
                  <span className="category">{produto.categoria}</span>
                  <h3>{produto.nome}</h3>

                  <div className="price-list">
                    {produto.prices
                      .sort((a, b) => a.preco - b.preco)
                      .map((p, idx) => (
                        <div
                          key={idx}
                          className={`price-row ${idx === 0 ? "best" : ""}`}
                        >
                          <span>{p.mercado}</span>
                          <strong>
                            R$ {p.preco.toFixed(2).replace(".", ",")}
                          </strong>
                        </div>
                      ))}
                  </div>

                  <div className="discount">
                    ⬇️ Economize até {produto.economia.toFixed(0)}% (R${" "}
                    {produto.economiaValor.toFixed(2).replace(".", ",")})
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeCard1;
