import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import StockStyleChart from "./StockStyleChart";
import Header from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';
        


interface EntryAPI {
  mercado: string;
  preco: number;
  coletadoEm: string;
}

interface ChartItem {
  hora: string;
  preco: number;
}

export default function GraficoProdutoPage() {
  const { nomeProduto, peso } = useParams();
  const [data, setData] = useState<ChartItem[]>([]);
  const [porMercado, setPorMercado] = useState<Record<string, ChartItem[]>>({});

  if (!nomeProduto || !peso) {
    return <p>Parâmetros inválidos na URL.</p>;
  }

  useEffect(() => {
    const nome = decodeURIComponent(nomeProduto);
    const pesoFix = decodeURIComponent(peso);

    fetch(`https://projetoapisennac.onrender.com/produtos/variacao-preco/${nome}/${pesoFix}`)
      .then((res) => res.json())
      .then((json) => {
        const convertido: ChartItem[] = json.entries.map((item: EntryAPI) => {
          const dataFormatada = new Date(item.coletadoEm).toLocaleDateString("pt-BR");

          return {
            hora: `${item.mercado} - ${dataFormatada}`,
            preco: Number(item.preco),
          };
        });

        setData(convertido);

        // --- Criar gráficos por mercado ---
        const grupos: Record<string, ChartItem[]> = {};

        json.entries.forEach((item: EntryAPI) => {
          const dataFormatada = new Date(item.coletadoEm).toLocaleDateString("pt-BR");

          const point: ChartItem = {
            hora: `${dataFormatada}`,
            preco: Number(item.preco),
          };

          if (!grupos[item.mercado]) {
            grupos[item.mercado] = [];
          }
          grupos[item.mercado].push(point);
        });

        setPorMercado(grupos);
      });
  }, [nomeProduto, peso]);

  return (
    <div>
       <Header />
      <h2>
        {nomeProduto} ({peso})
      </h2>

      {/* 🔵 Gráfico Geral */}
      <h3>Gráfico Geral</h3>
      <StockStyleChart data={data} />

      <hr />

      {/* 🔴 Gráficos por Mercado */}
      <h3>Gráficos por Mercado</h3>

      {Object.keys(porMercado).map((mercado) => (
        <div key={mercado} style={{ marginTop: "40px" }}>
          <h4>{mercado}</h4>
          <StockStyleChart data={porMercado[mercado]} />
        </div>
      ))}
        <Rodape />
    </div>
  );
}
