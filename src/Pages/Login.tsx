import { useState } from "react";
import type { ChangeEvent } from "react";
import Cabecalho from "../Components/Cabecalho";

function Login() {
  const [loading, setLoading] = useState(false);

  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");

  const handleUsuarioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsuarioInput(e.target.value);
  };

  const handleSenhaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSenhaInput(e.target.value);
  };

  const handleLoginClick = async () => {
    if (!usuarioInput || !senhaInput) {
      alert("Preencha as informações.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario: usuarioInput,
          senha: senhaInput,
        }),
      });

      if (response.ok) {
        const json = await response.json();
        alert("Login realizado com sucesso!");

        // Armazena o token no localStorage
        localStorage.setItem("token", json.token);

        // Limpa os campos
        setUsuarioInput("");
        setSenhaInput("");

        // Você pode redirecionar ou mostrar conteúdo autenticado aqui
      } else if (response.status === 401) {
        alert("Usuário ou senha incorretos.");
      } else {
        alert("Erro ao fazer login.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar os dados.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Cabecalho />

      <hr />
      {loading && <div>Carregando conteúdo...</div>}

      <div>
        <hr />
        <h2>Login</h2>
        <br />
        <input
          value={usuarioInput}
          type="text"
          placeholder="Digite o usuário"
          onChange={handleUsuarioChange}
        />
        <br />
        <br />
        <input
          value={senhaInput}
          type="password"
          placeholder="Digite a senha"
          onChange={handleSenhaChange}
        />
        <br />
        <br />
        <button onClick={handleLoginClick}>Entrar</button>
        <hr />
      </div>
    </div>
  );
}

export default Login;

