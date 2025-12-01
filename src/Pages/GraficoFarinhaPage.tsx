import CardBase from "./CardBase";
import Header from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';


export default function GraficoFarinhaPage() {
  return (
    <div>
      <Header />
      <div>
        <CardFarinha />
      </div>
        <Rodape />      
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
