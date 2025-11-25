import { useState } from "react";
import type { ChangeEvent } from "react";
import Cabecalho from "../Components/Cabecalho";
import { useAutenticacao } from "../Auth/hooks/useAutenticacao";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const [usuarioInput, setUsuarioInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");

  // contexto de autenticação
  const { login } = useAutenticacao();
  const navigate = useNavigate();

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
      const response = await fetch("http://localhost:3000/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario: usuarioInput,
          senha: senhaInput,
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          alert("Usuário ou senha incorretos.");
        } else {
          alert("Erro ao fazer login.");
        }
        return;
      }

      const json = await response.json();

      // 🔥 A API precisa retornar estes campos:
      // id, nome, email, telefone, tipo ("admin" | "usuario")

      login({
        id: json.id,
        nome: json.nome,
        email: json.email,
        telefone: json.telefone,
        tipo: json.tipo, // admin ou usuario
      });

      // redirecionamento
      if (json.tipo === "admin") {
        navigate("/admin");
      } else {
        navigate("/usuario");
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
        <br /><br />

        <input
          value={senhaInput}
          type="password"
          placeholder="Digite a senha"
          onChange={handleSenhaChange}
        />
        <br /><br />

        <button onClick={handleLoginClick}>Entrar</button>
        <hr />
      </div>
    </div>
  );
}

export default Login;
