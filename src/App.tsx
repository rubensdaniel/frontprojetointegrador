
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import CadastroMercado from './Pages/validar_deletar_Cadastro-mercado'
import CadastroProduto from './Pages/validar_deletar_Cadastro-produto'
import Comparativos from './Pages/Comparativos'
import Login from './Pages/Login'
import Sobre from './Pages/Sobre'
import CadastroUsuario from './Pages/validar_deletar_Cadastro-usuario'
import HistoricoProduto from './Pages/validar_deletar_Historico-produto'
// import AtualizacaoPreco from './Pages/validar_deletar_Atualizacao-preco'
// import AtualizacaoPrecoAdm from './Pages/validar_deletar_Atualizacao-precoAdm'
// import SugestaoProduto from './Pages/Sugestao-produtos'
//<<<<<<< HEAD
// import CadastroAdm from './Pages/validar_deletar_Cadastro-adm'
// import Cookies from './Pages/Cookies'
// =======
// import CadastroAdm from './Pages/Cadastro-adm'
//>>>>>>> 18d790cabe994808ccb09519c60d8c651634a95c

import TermoUso from './Pages/Termo-de-uso'


import ProdutoChart from './Pages/ProdutoChart'
import Condicional from './Pages/validar_deletar_condicional'



import AvHome from './aula/AtvHome'
import Requisitos from './aula/requisicoes'
import RequisicaoPost from './aula/requisicoesPost'

//import Rodape from './Components/rodape'

//import loginLogar from './contexts/login'
//import { UsuarioLogadoContext } from './contexts/contextAuth'
import NotFound from './Pages/NotFound';
//--------------
//import ProdutoMarcaChart from "./Pages/ProdutoMarcaChart";
//--------------

import GraficoArrozPage from "./Pages/GraficoArrozPage";
import GraficoMacarraoPage from "./Pages/GraficoMacarraoPage";
import GraficoFarinhaPage from "./Pages/GraficoFarinhaPage";
import GraficoFeijaoPage from "./Pages/GraficoFeijaoPage";
//import GraficoArrozPage from "./Pages/GraficoFeijaoPage";
//import GraficoArrozPage from "./Pages/GraficoFarinhaPage";

import PrimeiroAcesso from './Pages/Primeiro-acesso'
//import ConclusaoCadastro from './Pages/Conclusao-cadastro'
import Privacidade from './Pages/Privacidade'

// admin
import AdminLayout from './Admin/layout/AdminLayout'
import ProtegidoAdmin from './Admin/protecao/ProtegidoAdmin'

// usuario
import PainelUsuario from './Usuario/pages/PainelUsuario'
import ProtegidoUsuario from './Usuario/protecao/ProtegidoUsuario'





//      <Route path="/grafico/arroz" element={<ProdutoChart nomeProduto="Arroz" />}/>
//      <Route path="/grafico/feijao" element={<ProdutoChart nomeProduto="Feijão" />}/>
//      <Route path="/grafico/farinhadetrigo" element={<ProdutoChart nomeProduto="Farinha de trigo" />}/>
//      <Route path="/grafico/macarrao" element={<ProdutoChart nomeProduto="macarrão" />}/>

      // <Route path='/atualizacaopreco' element={<AtualizacaoPreco />}/>
      // <Route path='/atualizacaoprecoadm' element={<AtualizacaoPrecoAdm />}/>
      // <Route path='/sugestaoproduto' element={<SugestaoProduto />}/>


//      <Route path='/finalizacao' element={<ConclusaoCadastro />}/>      

//<Route path='/cadastroadm' element={<CadastroAdm />}/>
function App() {

  return (
    <Routes>
      <Route path="/grafico/arroz" element={<GraficoArrozPage />} />     
      <Route path="/grafico/macarrao" element={<GraficoMacarraoPage />} />     
      <Route path="/grafico/farinha" element={<GraficoFarinhaPage />} />     
      <Route path="/grafico/feijao" element={<GraficoFeijaoPage />} />     



      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/cadastromercado' element={<CadastroMercado />}/>
      <Route path='/cadastroproduto' element={<CadastroProduto />}/>
      <Route path='/comparativos' element={<Comparativos />}/>
      <Route path='/sobre' element={<Sobre />}/>
      <Route path='/cadastrousuario' element={<CadastroUsuario />}/>
      <Route path='/hisotircoproduto' element={<HistoricoProduto />}/>
      
      <Route path='/termouso' element={<TermoUso />}/>
      <Route path='/primeiroacesso' element={<PrimeiroAcesso />}/>

      <Route path='/privacidade' element={<Privacidade />}/>
      

      <Route path="*" element={<NotFound />} />

      <Route path='/condicional' element={<Condicional />}></Route>
      <Route path='/requisicao' element={<Requisitos />}></Route>     
      <Route path='/avhome' element={<AvHome />}></Route>     
      <Route path='/post' element={<RequisicaoPost />}></Route> 

 

       {/* admin */}
      <Route path="/admin" element={
          <ProtegidoAdmin>
            <AdminLayout />
          </ProtegidoAdmin>
        }
      />

      {/* usuário comum */}
      <Route
        path="/usuario"
        element={
          <ProtegidoUsuario>
            <PainelUsuario />
          </ProtegidoUsuario>
        }
      />  
      


    </Routes>

  )
}

export default App

