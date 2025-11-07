import { Link } from 'react-router-dom';
import '../Style/Cabecalho.css';
//import "../Style/Hero.css";


// const Header = () => {
//   return (
//     <header>
//       <div className="bannerheader">
//       <img src="bannerprojeto.png" alt="Banner do projeto" />    


//       </div>
//       <nav>
//         <ul className="nav-list">
          
//           <li><Link to="/login" className="nav-link">Login</Link></li>
          
//           <li className="nav-item dropdown">
//             <span className="nav-link">Cadastro ▾</span>
//             <ul className="dropdown-menu">
//               <li><Link to="/cadastrousuario" className="nav-sublink">Cadastro Usuario</Link></li>
//               <li><Link to="/cadastromercado" className="nav-sublink">Cadastro Mercado</Link></li>
//               <li><Link to="/cadastroproduto" className="nav-sublink">Cadastro Produto</Link></li>
//             </ul>
//           </li>

          
//           <li><Link to="/comparativos" className="nav-link">Comparativos</Link></li>

//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;





 const Header = () => {
   return (

  <>
    <section className="hero">
      <div className="hero-container">
        <h1>Comparaki</h1>
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

