import CardBase from "./CardBase";
import Header from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';

export default function GraficoFeijaoPage() {
  return (
    <div>
        <Header />
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
