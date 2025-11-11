import ProdutoChart from "./ProdutoChart";
import CardBase from "./CardBase";

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
      {/* Gráfico do produto */}
      <ProdutoChart nomeProduto="Farinha" />

      {/* Card do produto */}
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <CardFarinha />
      </div>
    </div>
  );
}

// ---------------------------
// Componente interno do card
// ---------------------------
function CardFarinha() {
  return (
    <CardBase
      titulo="Farinha"
      emojiBase="🍚"
      marca="farinha"
      peso="5kg"
    />
  );
}
