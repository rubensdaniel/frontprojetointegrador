import React, { useState } from "react";

const PrimeiroAcesso: React.FC = () => {
  const [produto, setProduto] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (produto.trim() === "") return alert("Digite o nome de um produto!");
    alert(`Buscando preços de: ${produto}`);
    // Aqui você pode redirecionar para a página de resultados
    // Exemplo: navigate(`/buscar?produto=${produto}`)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center px-4">
      <div className="max-w-md bg-white shadow-xl rounded-2xl p-8 text-center border border-green-100">
        <img
          src="/logo.png"
          alt="Comparaki"
          className="w-28 mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          Bem-vindo ao Comparaki!
        </h1>
        <p className="text-gray-600 mb-6">
          Compare produtos e descubra onde comprar mais barato 🏷️
        </p>

        <form onSubmit={handleSearch} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Digite o nome de um produto (ex: arroz, feijão...)"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
            className="border border-green-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="bg-green-600 text-white rounded-xl py-3 hover:bg-green-700 transition"
          >
            Comparar preços
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-500">
          É seu primeiro acesso?
          <a
            href="/cadastro"
            className="text-green-600 font-medium hover:underline ml-1"
          >
            Crie sua conta
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrimeiroAcesso;
