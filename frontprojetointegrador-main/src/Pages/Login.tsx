import { useNavigate } from 'react-router-dom';
import '../Style/Login.css';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
  
    const handleCadastro = () => {
      navigate('/Cadastrousuario');
    };

    const [email, setEmail] = useState('');
    function modificarEmail (evento: React.ChangeEvent <HTMLInputElement>){
      setEmail(evento.target.value)
    }

    const [senha, setSenha] = useState('');
    function modificarSenha (evento: React.ChangeEvent <HTMLInputElement>){
      setSenha(evento.target.value)
    }
  
    return (
      <div className="login-page">
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type='text' value={email} onChange={modificarEmail} />
              <hr />
              Seu e-mail é: {email}
            </div>
  
            <div className="form-group">
              <label htmlFor="password">Senha:</label>
              <input type='text' value={senha} onChange={modificarSenha}/>
              <hr />
              Sua senha é: {senha}
            </div>
  
            <div className="button-group">
              <button type="submit">Login</button>
              <button type="button" onClick={handleCadastro}>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
