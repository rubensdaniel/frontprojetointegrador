import CardBase from "./CardBase";
import Header from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';

export default function GraficoMacarraoPage() {
  return (
    <div>
  <Header />      
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
