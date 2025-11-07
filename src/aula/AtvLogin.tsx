import { useState, useContext } from "react";
import type { ChangeEvent } from "react";
import { UsuarioLogadoContext } from "../contexts/contextAuth";
import { useNavigate } from "react-router-dom";

/*Declaração da função da página*/ 
function AtvLogin () {

    /* Constantes */
    const ctxAuth = useContext(UsuarioLogadoContext)
    const navigate = useNavigate();

    const [Usuario, setUsuario] = useState('');
    const [Senha, setSenha] = useState('');

    /* Funções */

    const handleChangeUsuario = (VarE: ChangeEvent<HTMLInputElement>) => {        
        setUsuario(VarE.target.value)
    }

    const handleChangeSenha = (VarE: ChangeEvent<HTMLInputElement>) => {
        setSenha(VarE.target.value)
    }

    function HandleClickLogar(){       
        ctxAuth?.setName(Usuario);
        ctxAuth?.setSenha(Senha);
        navigate('/atvhome')

    }

    /* Retorno Visual da página AtvLogin */
    return(
        <div>
            <input onChange={handleChangeUsuario} type="text" placeholder="Insira o Login" /> 
            <br />
            <input onChange={handleChangeSenha} type="password" placeholder="Insira o senha" />
            <br />
            <hr />
            <h1>Dados do Context</h1>
            Nome no contexto: {ctxAuth?.name}
            <br />
            Senha no Contexto: {ctxAuth?.senha}
            <br />

            <button onClick={HandleClickLogar}>Logar!</button>
            

        </div>
    )

}

export default AtvLogin;