import { Link } from 'react-router-dom';
import '../Style/Cabecalho.css';

const Header = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <h1>
            <Link to="/" className="logo-link">
              <img
                src="/comparaki.png"
                alt="Logo Comparaki"
                className="logo-image"/>
            </Link>
          </h1>

          <p>Encontre os menores preços em mercados</p>
          <p>Compare produtos e economize nas suas compras</p>

          <div className="mt-8 flex justify-center gap-6 text-sm text-muted-foreground">
            <span>🏪 +4 mercados</span>
            <span>📦 +5 produtos</span>
            <span>💰 Economia garantida</span>
          </div>
        </div>
      </section>

    </>
  );
};

export default Header;
