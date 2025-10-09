import '../Style/Formularios.css';

const Cadastro = () => {
  return (
    <div className="form-container">
      <h2>Cadastro de Usuário</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />
        </div>

        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirme a Senha:</label>
          <input type="password" id="confirmarSenha" name="confirmarSenha" required />
        </div>

        <button type="submit" className="form-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
