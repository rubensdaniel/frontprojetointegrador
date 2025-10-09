
import '../Style/cadastromercado.css';

function CadastroMercado(){
    return(
    <main className="container">
      <h1>Cadastro de Mercado</h1>

      <form className="form-card">
        <div className="row">
          <label htmlFor="fantasia">Nome Fantasia</label>
          <input id="fantasia" name="nome_fantasia" type="text" placeholder="Nome comercial"/>
        </div>

        {/* Contato */}
        <div className="row">
          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel" placeholder="(00) 00000-0000"
          />
        </div>

        <div className="row">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" placeholder="contato@mercado.com"/>
        </div>

        {/* Endereço */}
        <div className="row">
          <label htmlFor="rua">Rua / Av</label>
          <input id="rua" name="rua" type="text" placeholder="Logradouro"/>
        </div>

        <div className="row">
          <label htmlFor="numero">Número</label>
          <input id="numero" name="numero" type="text" placeholder="123" />
        </div>

        <div className="row">
          <label htmlFor="bairro">Bairro</label>
          <input id="bairro" name="bairro" type="text" placeholder="Centro" />
        </div>

        <div className="row">
          <label htmlFor="cep">CEP</label>
          <input id="cep" name="cep" type="text" placeholder="00000-000" />
        </div>

        {/* Botões */}
        <div className="form-actions">
          <button type="submit" className="btn primary">Salvar Cadastro</button>
        </div>
      </form>
    </main>        
    )
}



export default CadastroMercado