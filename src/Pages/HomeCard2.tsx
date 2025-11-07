import { Link } from "react-router-dom";
import "../Style/HomeCard1.css";
import { produtosDados } from "../Dados/Produtos";

function HomeCard2() {
  // Marcas únicas
  const marcasUnicas = [...new Set(produtosDados.map((item) => item.marca))];

  // Função para criar slug da URL
  const toSlug = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "");

  // Monta os dados agrupados por marca
  const produtosPorMarca = marcasUnicas.map((marca) => {
    const items = produtosDados.filter((p) => p.marca === marca);
    const nomeExemplo = items[0]?.nome || "Produto";

    // Escolhe um emoji representativo
    let emoji = "🏷️";
    if (marca.toLowerCase().includes("tio")) emoji = "👨‍🌾";
    if (marca.toLowerCase().includes("pantera")) emoji = "🐆";
    if (marca.toLowerCase().includes("camil")) emoji = "🥣";

    // Converte preços e encontra faixa de valores
    const prices = items.map((p) => ({
      mercado: p.mercado,
      preco: Number(String(p.preco).replace(",", ".")),
    }));

    const menor = Math.min(...prices.map((p) => p.preco));
    const maior = Math.max(...prices.map((p) => p.preco));

    const economia = ((maior - menor) / maior) * 100;
    const economiaValor = maior - menor;

    return { marca, nomeExemplo, emoji, prices, menor, economia, economiaValor };
  });

  return (
    <section className="product-section1">
      <div className="container">

        <div className="product-grid">
          {produtosPorMarca.map((marca, index) => (
            <Link
              to={`/grafico/${toSlug(marca.marca)}`}
              key={index}
              className="produto-card-link"
            >
              <div className="product-card">
                <div className="product-image">{marca.emoji}</div>

                <div className="product-info">
                  <span className="category">Marca</span>
                  <h3>{marca.marca}</h3>

                  <div className="price-list">
                    {marca.prices.map((p, idx) => (
                      <div
                        key={idx}
                        className={`price-row ${
                          p.preco === marca.menor ? "best" : ""
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
                    ⬇️ Economize até {marca.economia.toFixed(0)}% (R${" "}
                    {marca.economiaValor.toFixed(2).replace(".", ",")})
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

export default HomeCard2;
