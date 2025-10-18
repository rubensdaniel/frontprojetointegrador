import { Link } from 'react-router-dom';
import '../Style/Cabecalho.css';


const Header = () => {
  return (
    <header>
      <div className="bannerheader">
      <img src="bannerprojeto.png" alt="Banner do projeto" />    


      </div>
      <nav>
        <ul className="nav-list">
          
          <li><Link to="/login" className="nav-link">Login</Link></li>
          
          <li className="nav-item dropdown">
            <span className="nav-link">Cadastro ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/cadastromercado" className="nav-sublink">Cadastro Mercado</Link></li>
              <li><Link to="/cadastroproduto" className="nav-sublink">Cadastro Produto</Link></li>
            </ul>
          </li>

          
          <li><Link to="/comparativos" className="nav-link">Comparativos</Link></li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;

