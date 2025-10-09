// components/ProdutoChart.tsx
import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList} from "recharts";
import '../Style/grafico.css'
import { produtosDados } from "../Dados/Produtos";

type ProdutoChartProps = {
  nomeProduto: string;
};

const ProdutoChart: React.FC<ProdutoChartProps> = ({ nomeProduto }) => {
  // Filtra só o produto e converte preco para número
  const data = produtosDados
    .filter((p) => p.nome === nomeProduto)
    .map((p) => ({
      mercado: p.mercado,
      preco: Number(String(p.preco).replace(",", ".")),
    }));

  if (!data.length) return <div>Produto "{nomeProduto}" não encontrado.</div>;

  return (
      <div className="grafico">
      <h3>{nomeProduto}</h3>
      <div className="grafico-container">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 50, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mercado" />
          <YAxis />
          <Tooltip formatter={(val) => `R$ ${Number(val)}`} />
          <Bar dataKey="preco" fill="#8884d8">
            <LabelList dataKey="preco" position="top" formatter={(val) => `R$ ${Number(val)}`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default ProdutoChart;