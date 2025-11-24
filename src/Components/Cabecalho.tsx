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
              src="Projeto Criador de logotipo.jpeg" 
              alt="Logo Comparaki" 
              className="logo-image" 
            />
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

    </section>''
    <div>
      <nav>
        <ul className="nav-list">
          
          <li><Link to="/login" className="nav-link">Login</Link></li>
          <li><Link to="/cadastrousuario" className="nav-sublink">Cadastro Usuario</Link></li>

        </ul>
      </nav>
    </div>
</>
   );
 };

export default Header;

