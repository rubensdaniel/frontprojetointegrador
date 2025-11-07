import React, { useMemo, useState } from "react";
import Header from '../Components/Cabecalho';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import { produtosDados } from "../Dados/Produtos";
import "../Style/grafico.css"; // CSS puro


type ProdutoChartProps = {
  nomeProduto: string;
};

// Opções de tempo (simulação)
const timeRanges = [
  { label: "1D", dias: 1 },
  { label: "1S", dias: 7 },
  { label: "1M", dias: 30 },
  { label: "3M", dias: 90 },
  { label: "1A", dias: 365 },
];

const ProdutoChart: React.FC<ProdutoChartProps> = ({ nomeProduto }) => {
  const [selectedRange, setSelectedRange] = useState(timeRanges[2]); // padrão: 1M

  const data = useMemo(() => {
    const filtered = produtosDados
      .filter((p) => p.nome === nomeProduto)
      .map((p) => ({
        mercado: p.mercado,
        preco: Number(String(p.preco).replace(",", ".")),
      }));

    return filtered.map((item, i) => {
      const price = item.preco + Math.sin(i * 0.5) * 0.3; // leve variação visual
      return {
        date: item.mercado,
        price,
        mercado: item.mercado,
        rawPrice: item.preco,
      };
    });
  }, [nomeProduto, selectedRange]);

  if (!data.length) {
    return <div className="grafico-card">Produto "{nomeProduto}" não encontrado.</div>;
  }

  const minPrice = Math.min(...data.map((d) => d.price)) * 0.98;
  const maxPrice = Math.max(...data.map((d) => d.price)) * 1.02;

  // Novas estatísticas para o painel visual
  const prices = data.map((d) => d.price);
  const avgPrice = prices.reduce((s, v) => s + v, 0) / prices.length;
  const firstPrice = prices[0];
  const lastPrice = prices[prices.length - 1];
  const changePct = firstPrice ? ((lastPrice - firstPrice) / Math.abs(firstPrice)) * 100 : 0;
  const lowestMarket = data.reduce((a, b) => (a.price < b.price ? a : b));
  const highestMarket = data.reduce((a, b) => (a.price > b.price ? a : b));
  const denom = (maxPrice - minPrice) || 1;

  return (
    <>
    <Header />
    <div className="grafico-card">
      
      <div className="grafico-header">
        <div>
          <h3 className="grafico-titulo">{nomeProduto}</h3>
          <p className="grafico-subtitulo">Comparativo entre mercados</p>
        </div>
        <div className="grafico-botoes">
          {timeRanges.map((range) => (
            <button
              key={range.label}
              className={`grafico-botao ${selectedRange.label === range.label ? "ativo" : ""}`}
              onClick={() => setSelectedRange(range)}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Novo painel: resumo + lista de mercados */}
      <div
        className="grafico-summary"
        style={{
          display: "flex",
          gap: 16,
          marginTop: 12,
          marginBottom: 12,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "#ffffff",
            padding: 12,
            borderRadius: 8,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            minWidth: 220,
          }}
        >
          <h4 style={{ margin: 0, marginBottom: 8 }}>Resumo</h4>
          <p style={{ margin: "4px 0", fontSize: 14 }}>
            Preço atual: <strong>R$ {lastPrice.toFixed(2)}</strong>
          </p>
          <p style={{ margin: "4px 0", fontSize: 14 }}>
            Variação:{" "}
            <span style={{ color: changePct >= 0 ? "#16a34a" : "#dc2626" }}>
              {changePct >= 0 ? "+" : ""}
              {changePct.toFixed(2)}%
            </span>
          </p>
          <p style={{ margin: "4px 0", fontSize: 13, color: "#555" }}>
            Mín: R$ {lowestMarket.price.toFixed(2)} • Máx: R$ {highestMarket.price.toFixed(2)} • Média: R${" "}
            {avgPrice.toFixed(2)}
          </p>
        </div>

        <div
          style={{
            width: 340,
            background: "#ffffff",
            padding: 12,
            borderRadius: 8,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <h4 style={{ margin: 0, marginBottom: 8 }}>Mercados</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {data.map((d) => {
              const norm = Math.max(0, Math.min(1, (d.price - minPrice) / denom));
              const barWidth = Math.max(6, Math.round(norm * 100));
              return (
                <li key={d.mercado} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "#4f46e5",
                      marginRight: 8,
                      flex: "0 0 10px",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                      <span style={{ color: "#333" }}>{d.mercado}</span>
                      <span style={{ color: "#111", fontWeight: 600 }}>R$ {d.price.toFixed(2)}</span>
                    </div>
                    <div style={{ background: "#f3f4f6", height: 6, borderRadius: 4, marginTop: 6 }}>
                      <div
                        style={{
                          width: `${barWidth}%`,
                          height: "100%",
                          background: "linear-gradient(90deg,#c7b3ff,#4f46e5)",
                          borderRadius: 4,
                        }}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="grafico-conteudo">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPreco" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
              tickMargin={10}
            />

            <YAxis
              domain={[minPrice, maxPrice]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
              tickMargin={10}
              tickFormatter={(value) => `R$ ${value.toFixed(2)}`}
              width={70}
            />

            <Tooltip
              contentStyle={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "6px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              formatter={(value: number) => [`R$ ${value.toFixed(2)}`, "Preço"]}
              labelFormatter={(label) => `Mercado: ${label}`}
            />

            <Legend />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#4f46e5"
              fillOpacity={1}
              fill="url(#colorPreco)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  );
};

export default ProdutoChart;
