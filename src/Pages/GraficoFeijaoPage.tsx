//import ProdutoChart from "./ProdutoChart";
import CardBase from "./CardBase";
import Header from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';

export default function GraficoFeijaoPage() {
  return (
    <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   alignItems: "center",
      //   gap: "40px",
      //   padding: "40px 20px",
      // }}
    >
        <Header />
      {/* Gráfico do produto */}
{/*      <ProdutoChart nomeProduto="Feijão" />  */}

      {/* Card do produto */}
      <div>
        <CardFeijao />
      </div>
        <Rodape />
    </div>
  );
}

function CardFeijao() {
  return (
    <CardBase
      titulo="Feijão"
      marca="Feijão"
      peso="1kg"
    />
  );
}
