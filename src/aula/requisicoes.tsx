import { useState } from "react";
import Cabecalho from "../Components/Cabecalho";
import { Link } from "react-router-dom";

function Requisicoes () {

    const [produtos , setProdutos] = useState([]);

    const carregarProdutos = () => {      
        fetch("https://fakestoreapi.com/products/")        
        .then((response) => {
                return response.json();
        })        
        .then((json) => {
            setProdutos(json);
        } )  
    }
   
    return (
    <div>
        <Cabecalho />
        
        <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>

        <hr /><br />
        {/* Criando botão para aplicação da função de busca mediante ao clique. */}
        <button onClick={carregarProdutos}> Carregar Produtos </button>
        <br />
        {/* Apenas exibe a quantidade de registros retornados. */}
        Total de produtos: {produtos.length}
        <br /><hr />
        <button> <Link to="../requisicoestype">Ir para Requisições com Types</Link> </button>

     
    </div>
    )
}

export default Requisicoes;