//import ProdutoChart from "./ProdutoChart";
import Header from '../Components/Cabecalho';
import CardBase from "./CardBase";
import Rodape from '../Components/Rodape';


export default function GraficoArrozPage() {
  return (
    
    <div
    
      // style={{
      //   display: "flex",
      //   flexDirection: "column",

      //   gap: "40px",
      //   padding: "40px 20px",
      // }}
      
    >
      {/* Gráfico do produto */}
{/*      <ProdutoChart nomeProduto="Arroz" />*/}
<Header />
      {/* Card do produto */}
      <div>
        <CardArroz />
      </div>
        <Rodape />
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


