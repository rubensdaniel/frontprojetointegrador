// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid,
//   Tooltip, Legend, ResponsiveContainer
// } from "recharts";

// export default function GraficoProdutoPage() {
//   const { nomeProduto, peso } = useParams();
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!nomeProduto || !peso) return;

//     const nomeDecodificado = decodeURIComponent(nomeProduto).toLowerCase();
//     const pesoDecodificado = decodeURIComponent(peso);

//     fetch(`http://localhost:3000/produtos/variacao-preco/${nomeDecodificado}/${pesoDecodificado}`)
//       .then((res) => res.json())
//       .then((json) => {
//         // --> Converter formato API para formato do Recharts <--
//         const entries = json.entries.map((item: any) => ({
//           mercado: item.mercado,
//           preco: item.preco,
//         }));

//         setData(entries);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Erro API:", err);
//         setLoading(false);
//       });

//   }, [nomeProduto, peso]);

//   if (loading) return <p>Carregando...</p>;

//   return (
//     <div style={{ width: "100%", height: 400 }}>
//       <h3>Variação de preço — {nomeProduto} ({peso})</h3>

//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="mercado" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="preco" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }


import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StockStyleChart from "./StockStyleChart";

interface EntryAPI {
  mercado: string;
  preco: number;
}

export default function GraficoProdutoPage() {
  const { nomeProduto, peso } = useParams();
  const [data, setData] = useState<{ hora: string; preco: number }[]>([]);

  // 🚀 Validar antes
  if (!nomeProduto || !peso) {
    return <p>Parâmetros inválidos na URL.</p>;
  }

  useEffect(() => {
    const nome = decodeURIComponent(nomeProduto);
    const pesoFix = decodeURIComponent(peso);

    fetch(`http://localhost:3000/produtos/variacao-preco/${nome}/${pesoFix}`)
      .then((res) => res.json())
      .then((json) => {
        const convertido = json.entries.map((item: EntryAPI) => ({
          hora: item.mercado,
          preco: item.preco,
        }));

        setData(convertido);
      });
  }, [nomeProduto, peso]);

  return (
    <div>
      <h3>{nomeProduto} ({peso})</h3>
      <StockStyleChart data={data} />
    </div>
  );
}
