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
//                     {produto.prices.map((p, idx) => (
//                       <div
//                         key={idx}
//                         className={`price-row ${
//                           p.preco === produto.menor ? "best" : ""
//                         }`}
//                       >
//                         <span>{p.mercado}</span>
//                         <strong>
//                           R$ {p.preco.toFixed(2).replace(".", ",")}
//                         </strong>
//                       </div>
//                     ))}
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

interface Produto {
  mercado: string;
  preco: string;
  peso: string;
  url: string;
  imagem: string;
  coletadoEm: string;
}

function HomeCard1() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/produtos/price-comparison/ARROZ%20FINO%20PRATO?peso=5kg"
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data: Produto[] = await response.json();
        console.log("✅ Dados recebidos:", data);

        if (!data || data.length === 0) {
          throw new Error("Nenhum produto encontrado");
        }

        setProdutos(data);
      } catch (err: any) {
        console.error("❌ Erro ao buscar produtos:", err);
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) return <p>Carregando produtos...</p>;
  if (erro) return <p>Erro ao carregar produtos do servidor: {erro}</p>;

  // Cálculos de preço
  const precosNumeros = produtos.map((p) =>
    Number(String(p.preco).replace(",", "."))
  );
  const menor = Math.min(...precosNumeros);
  const maior = Math.max(...precosNumeros);
  const economia = ((maior - menor) / maior) * 100;
  const economiaValor = maior - menor;

  return (
    <section className="product-section">
      <div className="container">
        <h2>Produtos em Destaque</h2>
        <p className="subtitle">Compare preços e veja onde está mais barato</p>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">🍚</div>
            <div className="product-info">
              <span className="category">Alimento</span>
              <h3>ARROZ FINO PRATO 5kg</h3>

              <div className="price-list">
                {produtos.map((p, idx) => (
                  <div
                    key={idx}
                    className={`price-row ${
                      Number(p.preco) === menor ? "best" : ""
                    }`}
                  >
                    <span>{p.mercado}</span>
                    <strong>R$ {Number(p.preco).toFixed(2).replace(".", ",")}</strong>
                  </div>
                ))}
              </div>

              <div className="discount">
                ⬇️ Economize até {economia.toFixed(0)}% (R${" "}
                {economiaValor.toFixed(2).replace(".", ",")})
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCard1;
