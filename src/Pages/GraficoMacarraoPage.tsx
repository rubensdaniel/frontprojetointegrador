//import ProdutoChart from "./ProdutoChart";
import CardBase from "./CardBase";
import Header from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';

export default function GraficoMacarraoPage() {
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
{/*      <ProdutoChart nomeProduto="macarrão" />  */}

      {/* Card do produto */}
      <div>
        <CardMacarrao />
      </div>
        <Rodape />      
    </div>
  );
}

// ---------------------------
// Componente interno do card
// ---------------------------
function CardMacarrao() {
  return (
    <CardBase
      titulo="Macarrão"
      marca="Macarrão"
      peso="500g"
    />
  );
}
