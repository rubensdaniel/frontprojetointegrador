import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Usuario {
  nome: string;
}

const Hero = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const nome = localStorage.getItem("usuario_nome");

    if (token && nome) {
      setUsuario({ nome });
    } else {
      setUsuario(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario_nome");
    setUsuario(null);
    navigate("/");
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          <Link to="/" className="logo-link">
            <img
              src="Projeto Criador de logotipo.jpeg"
              alt="Logo Comparaki"
              className="logo-image"
            />
          </Link>
        </h1>

        <p>Encontre os menores preços em mercados</p>
        <p>Compare produtos e economize nas suas compras</p>

        <div className="buttons">
          {usuario ? (
            <>
              <button className="primary" onClick={() => navigate("/register-market")}>
                Cadastrar Mercado
              </button>

              <button className="primary" onClick={() => navigate("/register-product")}>
                Cadastrar Produto
              </button>

              <button className="outline" onClick={handleLogout}>
                Sair
              </button>
            </>
          ) : (
            <>
              <button className="primary" onClick={() => navigate("/login")}>
                Entrar
              </button>

              <button className="outline" onClick={() => navigate("/signup")}>
                Cadastrar
              </button>
            </>
          )}
        </div>

        <div className="stats">
          <span>🏪 +50 mercados</span>
          <span>📦 +1000 produtos</span>
          <span>💰 Economia garantida</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
