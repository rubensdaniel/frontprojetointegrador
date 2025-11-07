import React, { useMemo, useState } from "react";
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

    return filtered.map((item, i) => ({
      date: item.mercado,
      price: item.preco + Math.sin(i * 0.5) * 0.3, // leve variação visual
    }));
  }, [nomeProduto, selectedRange]);

  if (!data.length) {
    return <div className="grafico-card">Produto "{nomeProduto}" não encontrado.</div>;
  }

  const minPrice = Math.min(...data.map((d) => d.price)) * 0.98;
  const maxPrice = Math.max(...data.map((d) => d.price)) * 1.02;

  return (
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
  );
};

export default ProdutoChart;
