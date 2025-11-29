import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/HomeCard1.css";


interface ProdutoRepetido {
  nomeOrdenado: string;
  exemplo: string;
  marca: string;
  count: number;
}

interface PriceEntry {
  mercado: string;
  preco: number;
  url: string;
  imagem: string;
  nomeLimpo: string;
  coletadoEm: string;   
}

interface ProdutoFinal {
  nome: string;
  nomeExibicao: string;
  categoria: string;
  prices: PriceEntry[];
  menor: number;
  economia: number;
  economiaValor: number;
  imagem?: string;
  url?: string;
}

interface CardBaseProps {
  titulo: string;
  marca: string;
  peso: string;
}

function CardBase({ titulo, marca, peso }: CardBaseProps) {
  const [produtos, setProdutos] = useState<ProdutoFinal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        setLoading(true);

        const res = await fetch(
          `https://projetoapisennac.onrender.com/produtos/mais-repetidos?limit=20&peso=${peso}&marca=${marca}`
        );
        const repetidos: ProdutoRepetido[] = await res.json();

        const listaFinal: ProdutoFinal[] = [];

        for (const item of repetidos) {
          const priceRes = await fetch(
            `https://projetoapisennac.onrender.com/produtos/comparacao-preco/${encodeURIComponent(
              item.nomeOrdenado
            )}?peso=${peso}`
          );

          const pricesData = await priceRes.json();
          if (!pricesData || pricesData.length === 0) continue;

          const primeiro = pricesData[0];
          const nomeExibicao = primeiro?.nomeLimpo || item.nomeOrdenado;
          const imagem = primeiro?.imagem;
          const url = primeiro?.url;

          const prices: PriceEntry[] = pricesData.map((p: any) => ({
            mercado: p.mercado,
            preco: Number(p.preco),
            url: p.url,
            imagem: p.imagem,
            nomeLimpo: p.nomeLimpo,
            coletadoEm: p.coletadoEm,   
          }));

          const menor = Math.min(...prices.map((p) => p.preco));
          const maior = Math.max(...prices.map((p) => p.preco));
          const economia = ((maior - menor) / maior) * 100;
          const economiaValor = maior - menor;

          listaFinal.push({
            nome: item.nomeOrdenado,
            nomeExibicao,
            categoria: titulo,
            prices,
            menor,
            economia,
            economiaValor,
            imagem,
            url,
          });
        }

        setProdutos(listaFinal);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      } finally {
        setLoading(false);
      }
    }

    carregarProdutos();
  }, [marca, peso, titulo]);

  if (loading) {
    return (
      <section className="product-section">
        <div className="container">
          <h2>Carregando {titulo}...</h2>
          <p className="subtitle">Aguarde enquanto buscamos os preços</p>
        </div>
      </section>
    );
  }

  return (
    <section className="product-section">
      <div className="container">
        <h2>{titulo} em Destaque</h2>
        <p className="subtitle">Compare preços e veja onde está mais barato</p>

        <div className="product-grid">
          {produtos.map((produto, index) => (
            <Link
              to={`/grafico/${encodeURIComponent(produto.nome)}/${peso}`}
              key={index}
              className="produto-card-link"
            >
              <div className="product-card">
                {produto.imagem && (
                  <img
                    src={produto.imagem}
                    alt={produto.nomeExibicao}
                    className="product-photo"
                  />
                )}

                <div className="product-info">
                  <span className="category">{produto.categoria}</span>
                  <h3>{produto.nomeExibicao}</h3>

                  <div className="price-list">
                    {produto.prices
                      .slice()
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

                          {/* 📅 Exibir somente a data, sem hora */}
                          <small style={{ color: "#777", fontSize: "12px" }}>
                            {new Date(p.coletadoEm).toLocaleDateString("pt-BR")}
                          </small>
                        </div>
                      ))}
                  </div>

                  <div className="discount">
                    ⬇️ Economize até {produto.economia.toFixed(0)}% (R${" "}
                    {produto.economiaValor.toFixed(2).replace(".", ",")})
                  </div>

                  {produto.url && (
                    <a
                      href={produto.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-link"
                    ></a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardBase;
