
// import '../Style/cadastromercado.css';

// function CadastroMercado(){
//     return(
//     <main className="container">
//       <h1>Cadastro de Mercado</h1>

//       <form className="form-card">
//         <div className="row">
//           <label htmlFor="fantasia">Nome Fantasia</label>
//           <input id="fantasia" name="nome_fantasia" type="text" placeholder="Nome comercial"/>
//         </div>

//         {/* Contato */}
//         <div className="row">
//           <label htmlFor="telefone">Telefone</label>
//           <input id="telefone" name="telefone" type="tel" placeholder="(00) 00000-0000"
//           />
//         </div>

//         <div className="row">
//           <label htmlFor="email">E-mail</label>
//           <input id="email" name="email" type="email" placeholder="contato@mercado.com"/>
//         </div>

//         {/* Endereço */}
//         <div className="row">
//           <label htmlFor="rua">Rua / Av</label>
//           <input id="rua" name="rua" type="text" placeholder="Logradouro"/>
//         </div>

//         <div className="row">
//           <label htmlFor="numero">Número</label>
//           <input id="numero" name="numero" type="text" placeholder="123" />
//         </div>

//         <div className="row">
//           <label htmlFor="bairro">Bairro</label>
//           <input id="bairro" name="bairro" type="text" placeholder="Centro" />
//         </div>

//         <div className="row">
//           <label htmlFor="cep">CEP</label>
//           <input id="cep" name="cep" type="text" placeholder="00000-000" />
//         </div>

//         {/* Botões */}
//         <div className="form-actions">
//           <button type="submit" className="btn primary">Salvar Cadastro</button>
//         </div>
//       </form>
//     </main>        
//     )
// }



// export default CadastroMercado


import { useState } from 'react';
import '../Style/cadastromercado.css';
import { api, type MercadoPayload } from './api'; // ajuste o caminho se necessário
 
function CadastroMercado() {
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
 
  const SalvarCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
 
    const dados: MercadoPayload = {
      nome: nomeFantasia,
      telefone: telefone,
      email: email,
      rua: rua,
      numero: numero,
      bairro: bairro,
      cep: cep,
      endereco: `${rua}, ${numero} - ${bairro}`,
    };
 
    try {
      await api.CriarMercado(dados);
      alert("✅ Cadastro realizado com sucesso!");
 
      // Limpa os campos após o sucesso
      setNomeFantasia("");
      setTelefone("");
      setEmail("");
      setRua("");
      setNumero("");
      setBairro("");
      setCep("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`❌ ${error.message}`);
      } else {
        alert('❌ Ocorreu um erro desconhecido');
      }
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <main className="container">
      <h1>Cadastro de Mercado</h1>
 
      <form className="form-card" onSubmit={SalvarCadastro}>
        <div className="row">
          <label htmlFor="fantasia">Nome Fantasia</label>
          <input
            id="fantasia"
            name="nome"
            type="text"
            placeholder="Nome comercial"
            value={nomeFantasia}
            onChange={(e) => setNomeFantasia(e.target.value)}
          />
        </div>
 
        <div className="row">
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
 
        <div className="row">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="contato@mercado.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
 
        <div className="row">
          <label htmlFor="rua">Rua / Av</label>
          <input
            id="rua"
            name="rua"
            type="text"
            placeholder="Logradouro"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
        </div>
 
        <div className="row">
          <label htmlFor="numero">Número</label>
          <input
            id="numero"
            name="numero"
            type="text"
            placeholder="123"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
 
        <div className="row">
          <label htmlFor="bairro">Bairro</label>
          <input
            id="bairro"
            name="bairro"
            type="text"
            placeholder="Centro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
        </div>
 
        <div className="row">
          <label htmlFor="cep">CEP</label>
          <input
            id="cep"
            name="cep"
            type="text"
            placeholder="00000-000"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </div>
 
        <div className="form-actions">
          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? 'Salvando...' : 'Salvar Cadastro'}
          </button>
        </div>
      </form>
    </main>
  );
}
 
export default CadastroMercado;