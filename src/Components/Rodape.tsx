import { Link } from "react-router-dom";
import '../Style/Rodape.css'

function Rodape (){
    return (
    <footer className="footer-empresa">
      <div className="footer-container">

        <div className="footer-coluna">
          <h4>O Projeto</h4>
          <ul>
            <li><Link to="/sobre">Quem somos</Link></li>

          </ul>
        </div>

        <div className="footer-coluna">
          <h4>Como usar</h4>
          <ul>
            <li><Link to="/primeiroacesso">Primeiro acesso</Link></li>
            <li><Link to="/finalizacao">Após a conclusão do cadastro</Link></li>
          </ul>
        </div>

        <div className="footer-coluna">
          <h4>Nossas políticas</h4>
          <ul>
            <li><Link to="/termouso">Termos de uso</Link></li>
            <li><Link to="/privacidade">Política de privacidade</Link></li>
            <li><Link to="/cookies">Política de cookies</Link></li>
          </ul>
        </div>


        <div >

        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Projeto Senac — Todos os direitos não reservado ao Senac.</p>
      </div>
    </footer>
  );
}; 

export default Rodape;