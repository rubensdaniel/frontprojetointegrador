import ProdutoChart from "./ProdutoChart";
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
      <ProdutoChart nomeProduto="Arroz" />

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
      emojiBase="🍚"
      marca="arroz"
      peso="5kg"
    />
  );
}
