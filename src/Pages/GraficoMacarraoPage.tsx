
import ProdutoChart from "./ProdutoChart";
import CardBase from "./CardBase";

export default function GraficoMacarraoPage() {
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
      <ProdutoChart nomeProduto="macarrão" />

      {/* Card do produto */}
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        <CardMacarrao />
      </div>
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
      emojiBase="🍚"
      marca="Macarrão"
      peso="500g"
    />
  );
}
