import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/HomeCard1.css";

// Tipos
interface PrecoAPI {
  mercado: string;
  preco: string;
  peso: string;
  imagem: string;
  coletadoEm: string;   
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
  prices: {
    mercado: string;
    preco: number;
    coletadoEm: string; 
  }[];
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
            coletadoEm: p.coletadoEm,   // <-- ADICIONADO
          }));

          const menor = Math.min(...prices.map((p) => p.preco));
          const maior = Math.max(...prices.map((p) => p.preco));
          const economia = ((maior - menor) / maior) * 100;
          const economiaValor = maior - menor;

          lista.push({
            nome: nomeExibir,
            nomeOrdenado: produto.nomeOrdenado,
            marca: item.marca,
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
              to={`/grafico/${toSlug(produto.marca)}`}
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

                          {/* MOSTRA DATA COLETADA */}
                          <small style={{ fontSize: "10px", color: "#777" }}>
                            {new Date(p.coletadoEm).toLocaleDateString("pt-BR")}
                          </small>
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
