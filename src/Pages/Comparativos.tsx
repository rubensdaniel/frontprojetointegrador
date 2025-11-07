import { produtosDados } from "../Dados/Produtos";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Comparativos = () => {
  // Converter preco para número
  const dataConvertida = produtosDados.map((item) => ({
    ...item,
    preco: parseFloat(item.preco.replace(",", ".")),
  }));

  // Reestruturar dados -> produto como chave, mercados como colunas
  const produtosAgrupados: Record<string, any> = {};

  dataConvertida.forEach((item) => {
    if (!produtosAgrupados[item.nome]) {
      produtosAgrupados[item.nome] = { nome: item.nome };
    }
    produtosAgrupados[item.nome][item.mercado] = item.preco;
  });

  const dataFinal = Object.values(produtosAgrupados);

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3>Preços por Produto e Mercado</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dataFinal} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nome" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Cada mercado vira uma "Bar" */}
          <Bar dataKey="Tauste" fill="#8884d8" />
          <Bar dataKey="Superbom" fill="#82ca9d" />
          <Bar dataKey="Confianca" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Comparativos;


