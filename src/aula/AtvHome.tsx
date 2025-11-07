import { useContext, useEffect, useState } from "react";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import type { Produto } from "./types/produtos";

function AtvHome () {

    /* CONSTANTES */

    const ctxAuth = useContext(UsuarioLogadoContext);
    const [produtos , setProdutos] = useState<Produto[]>([]);
    const [load, setLoad] = useState(false);

    /* FUNÇÕES */
    const carregarProdutos = async () => {    
        setLoad(true);
       
        try {
            let response = await fetch("https://fakestoreapi.com/products");            
            let json = await response.json(); 
            const dataArray = Array.isArray(json) ? json: [json]
            setProdutos(dataArray);       
            setLoad(false);
        } catch (error) {
           alert('DEU ERROOO!') 
           setProdutos([])
           setLoad(false);
        }        
    }   

    useEffect(() => {
        // carregarProdutos();
    } , []);
    

    return(
       <div>
        <h1> Home </h1>
        <hr />
        Usuário do contexto: {ctxAuth?.name}
        <br />
        Senha do Contexto: {ctxAuth?.senha}
        <br />
        <button onClick={carregarProdutos}>CARREGAR PRODUTO</button>
        <hr />
        { load &&
           <div>CARREGANDO INFORMAÇÕES</div>
        
        }        
        {!load &&
        <div>
            <h2>Lista de Produtos</h2>
            {produtos.map( (mariazinha, index) => (
                    <div key={mariazinha.id} >                    
                        <img src={mariazinha.image} className='products' />
                        {mariazinha.title}
                        <br />
                        {mariazinha.description}                    
                        <hr />
                    </div>

                ) )}
        </div>
        }
        


        

       </div>
    )
}

export default AtvHome;