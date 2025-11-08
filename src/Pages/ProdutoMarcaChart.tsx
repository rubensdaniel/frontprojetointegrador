import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";
import "../Style/grafico.css";
import { produtosDados } from "../Dados/Produtos";

// Props: nome do produto e marca
type ProdutoMarcaChartProps = {
  nomeProduto: string;
  marca: string;
};

const ProdutoMarcaChart: React.FC<ProdutoMarcaChartProps> = ({ nomeProduto, marca }) => {
  const data = produtosDados
    .filter(
      (p) =>
        p.nome.toLowerCase() === nomeProduto.toLowerCase() &&
        p.marca.toLowerCase() === marca.toLowerCase()
    )
    .map((p) => ({
      mercado: p.mercado,
      preco: Number(String(p.preco).replace(",", ".")),
    }));

  if (!data.length) {
    return (
      <div className="grafico">
        <h3>Produto não encontrado</h3>
        <p>
          Produto "<strong>{nomeProduto}</strong>" com marca "<strong>{marca}</strong>" não encontrado.
        </p>
      </div>
    );
  }

  return (
    <div className="grafico">
      <h3>{nomeProduto} - {marca}</h3>
      <div className="grafico-container" style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 50, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mercado" />
            <YAxis />
            <Tooltip formatter={(val) => `R$ ${Number(val).toFixed(2)}`} />
            <Bar dataKey="preco" fill="hsl(142 71% 45%)">
              <LabelList dataKey="preco" position="top" formatter={(val) => `R$ ${Number(val).toFixed(2)}`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProdutoMarcaChart;
