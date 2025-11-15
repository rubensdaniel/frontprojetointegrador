import React, { useState } from "react";
import '../Style/cadastroproduto.css';

function CadastroProduto(){

  const [produto, setProduto] = useState("");

  // Lista de pesos por produto
  const pesosPorProduto: Record<string, string[]> = {
    arroz: ["1kg", "2kg", "5kg"],
    feijao: ["1kg", "2kg"],
    farinha: ["1kg", "5kg"],
    macarrao: ["500g", "1kg"],
  };

  return(
    <main className="container">
      <h1>Cadastro de Produto</h1>

      <form className="form-card">
        {/* Produto */}
        <div className="row">
          <label htmlFor="nome">Produto</label>
          <select
            id="nome"
            name="nome"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            required
          >
            <option value="">Selecione um produto</option>
            <option value="arroz">Arroz</option>
            <option value="feijao">Feijão</option>
            <option value="farinha">Farinha de Trigo</option>
            <option value="macarrao">Macarrão</option>
          </select>
        </div>

        {/* Marca */}
        <div className="row">
          <label htmlFor="marca">Marca</label>
          <input
            id="marca"
            name="marca"
            type="text"
            placeholder="Ex: Camil, Dona Benta..."
          />
        </div>

        {/* Peso */}
        <div className="row">
          <label htmlFor="peso">Peso / Quantidade</label>
          <select id="peso" name="peso" required disabled={!produto}>
            <option value="">
              {produto ? "Selecione o peso" : "Escolha o produto primeiro"}
            </option>
            {produto &&
              pesosPorProduto[produto].map((peso) => (
                <option key={peso} value={peso}>
                  {peso}
                </option>
              ))}
          </select>
        </div>

        {/* Mercado */}
        <div className="row">
          <label htmlFor="mercado">Mercado</label>
          <input
            id="mercado"
            name="mercado"
            type="text"
            placeholder="Nome do mercado"
          />
        </div>

        {/* Botões */}
        <div className="form-actions">
          <button type="reset" className="btn secondary">Limpar</button>
          <button type="submit" className="btn primary">Salvar Produto</button>
        </div>
      </form>
    </main>
  )
}

export default CadastroProduto;
