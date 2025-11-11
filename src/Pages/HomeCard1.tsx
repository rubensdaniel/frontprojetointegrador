import { Link } from "react-router-dom";
import "../Style/HomeCard1.css";
import { produtosDados } from "../Dados/Produtos";

function HomeCard1() {
  // Nomes únicos de produtos
  const nomesUnicos = [...new Set(produtosDados.map((item) => item.nome))];

  // Função para criar slug da URL
  const toSlug = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");

  // Monta dados agrupados por nome
  const produtos = nomesUnicos.map((nome) => {
    const items = produtosDados.filter((p) => p.nome === nome);

    // Valores padrão caso não exista categoria ou emoji
    let categoria = "Alimento";
    let emoji = "🛒";

    // Você pode personalizar manualmente:
    if (nome.toLowerCase().includes("arroz")) emoji = "🍚";
    if (nome.toLowerCase().includes("feijão")) emoji = "🫘";
    if (nome.toLowerCase().includes("farinha")) emoji = "🌾";
    if (nome.toLowerCase().includes("macarrão")) emoji = "🍝";

    // Converte preço string → número
    const prices = items.map((p) => ({
      mercado: p.mercado,
      preco: Number(String(p.preco).replace(",", ".")),
    }));

    const menor = Math.min(...prices.map((p) => p.preco));
    const maior = Math.max(...prices.map((p) => p.preco));

    const economia = ((maior - menor) / maior) * 100;
    const economiaValor = maior - menor;

    return { nome, categoria, emoji, prices, menor, economia, economiaValor };
  });

  return (
    <section className="product-section">
      <div className="container">
        <h2>Produtos em Destaque</h2>
        <p className="subtitle">Compare preços e veja onde está mais barato</p>

        <div className="product-grid">
          {produtos.map((produto, index) => (
            <Link
              to={`/grafico/${toSlug(produto.nome)}`}
              key={index}
              className="produto-card-link"
            >
              <div className="product-card">
                <div className="product-image">{produto.emoji}</div>

                <div className="product-info">
                  <span className="category">{produto.categoria}</span>
                  <h3>{produto.nome}</h3>

                  <div className="price-list">
                    {produto.prices.map((p, idx) => (
                      <div
                        key={idx}
                        className={`price-row ${
                          p.preco === produto.menor ? "best" : ""
                        }`}
                      >
                        <span>{p.mercado}</span>
                        <strong>
                          R$ {p.preco.toFixed(2).replace(".", ",")}
                        </strong>
                      </div>
                    ))}
                  </div>

                  <div className="discount">
                    ⬇️ Economize até{" "}
                    {produto.economia.toFixed(0)}% (R${" "}
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



