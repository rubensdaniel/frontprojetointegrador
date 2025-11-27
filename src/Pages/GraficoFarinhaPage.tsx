//import ProdutoChart from "./ProdutoChart";
import CardBase from "./CardBase";
import Header from '../Components/Cabecalho';

export default function GraficoFarinhaPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        padding: "40px 20px",
      }}
    >
      <Header />
      {/* Gráfico do produto */}
      
{/*      <ProdutoChart nomeProduto="Farinha" />  */}

      {/* Card do produto */}
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <CardFarinha />
      </div>
    </div>
  );
}

function CardFarinha() {
  return (
    <CardBase
      titulo="Farinha"
      marca="farinha"
      peso="1kg"
    />
  );
}
