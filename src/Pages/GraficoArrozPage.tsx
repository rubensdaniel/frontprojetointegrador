import Header from '../Components/Cabecalho';
import CardBase from "./CardBase";
import Rodape from '../Components/Rodape';

export default function GraficoArrozPage() {
  return (   
    <div>
    <Header />
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


