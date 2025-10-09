import { useState } from "react";

function Condicional(){
    const [show, setShow] = useState(false);

    function HandleClickMostrar(){
        if (show){setShow(false)}
        else {setShow(true)}

    }
    return(
        <div>
            <h1>Exibição Condicional de conteudo</h1>
            <button onClick={HandleClickMostrar}>{show ? "Ocultar":"Exibir"}</button>
            {show === true &&
             <div>Este contéudo só é exibido ao clicar o botão</div>
             }
        </div>
    )
}

export default Condicional;