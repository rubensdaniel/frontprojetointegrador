import React from "react";
import { useParams } from "react-router-dom";
import ProdutoMarcaChart from "./ProdutoMarcaChart";

const ProdutoRouteWrapper: React.FC = () => {
  const { nomeProduto, marca } = useParams();

  if (!nomeProduto || !marca) {
    return <div>Parâmetros inválidos na URL.</div>;
  }

  return <ProdutoMarcaChart nomeProduto={nomeProduto} marca={marca} />;
};

export default ProdutoRouteWrapper;
