import ProdutoChart from "./ProdutoChart";
import Header from '../Components/Cabecalho';
import CardBase from "./CardBase";

export default function GraficoArrozPage() {
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
      {/* Gráfico do produto */}
{/*      <ProdutoChart nomeProduto="Arroz" />*/}
<Header />
      {/* Card do produto */}
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <CardArroz />
      </div>
    </div>
  );
}

function CardArroz() {
  return (
    <CardBase
      titulo="Arroz"
      marca="arroz"
      peso="5kg"
    />
  );
}
