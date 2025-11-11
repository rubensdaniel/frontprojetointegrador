


import ProdutoChart from "./ProdutoChart";
import CardBase from "./CardBase";

export default function GraficoFeijaoPage() {
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
      <ProdutoChart nomeProduto="Feijão" />

      {/* Card do produto */}
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <CardFeijao />
      </div>
    </div>
  );
}

// ---------------------------
// Componente interno do card
// ---------------------------
function CardFeijao() {
  return (
    <CardBase
      titulo="Feijão"
      emojiBase="🍚"
      marca="Feijão"
      peso="1kg"
    />
  );
}
