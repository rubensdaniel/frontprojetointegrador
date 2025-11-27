import { useState, useEffect } from "react";
import Cabecalho from "../Components/Cabecalho";

import RequisicoesTypesAsync from "./deletar_requisicoesTypesAsync";
import { Link } from "react-router-dom";

//Importo o meu tipo a ser utilizado.
import type { Produto } from "./types/deletar_produtos";

function RequisicoesTypes () {

    // Na declaração da minha constante, agora meu 
    // STATE será um Array de Produtos
    const [produtos , setProdutos] = useState<Produto[]>([]);



    const carregarProdutos = () => {
            fetch("https://fakestoreapi.com/products/1")       
            .then((response) => {
                return response.json();
        })        
        .then((json) => {
            setProdutos(json);
        } )          

        // // Demonstração do Async/Await
        // alert('Executou este processo');
    }   

    return (
    <div>
        <Cabecalho />
        
        <h1>PAGINA EXEMPLO DE REQUISIÇÕES</h1>

        <hr /><br />        
        <button onClick={carregarProdutos}> Carregar Produtos </button>
        <br />        
        Total de produtos: {produtos.length}
        <br /><hr />
        <h1>Lista de Produtos</h1>
        <div>
            {produtos.map((item, index) => (
                <div key={index} >                    
                    <img src={item.image} className='products' />
                    {item.title}
                    <br />
                    {item.description}
                    <br />                    
                    <hr />
                </div>

            ) )}
        </div>
        <br /><hr />
        <button> <Link to="../requisicoesTypesAsync">Ir para Requisições Assincronas</Link> </button>

     
    </div>
    )
}

export default RequisicoesTypes;