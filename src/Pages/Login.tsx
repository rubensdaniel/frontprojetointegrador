import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginCadastro() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-3xl p-10 w-full max-w-xl text-center">

        <h2 className="text-2xl font-bold text-gray-800">
          Entre ou Crie sua Conta
        </h2>

        <hr className="my-4" />

        <p className="text-gray-600 mb-6">
          Acesse sua conta para continuar ou registre-se para começar a comparar preços.
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="Login Icon"
            className="w-16 opacity-80"
          />
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/login")}
            className="btn-primary py-3 font-semibold rounded-xl"
          >
            Fazer Login
          </button>

          <button
            onClick={() => navigate("/cadastro")}
            className="btn-primary py-3 font-semibold rounded-xl bg-green-600 hover:bg-green-700"
          >
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  );
}

