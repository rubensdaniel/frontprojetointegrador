
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import TermoUso from './Pages/Termo-de-uso'
import Login from './Pages/Login'
import Sobre from './Pages/Sobre'
import NotFound from './Pages/NotFound';
import GraficoArrozPage from "./Pages/GraficoArrozPage";
import GraficoMacarraoPage from "./Pages/GraficoMacarraoPage";
import GraficoFarinhaPage from "./Pages/GraficoFarinhaPage";
import GraficoFeijaoPage from "./Pages/GraficoFeijaoPage";
import GraficoProdutoPage from "./Pages/GraficoProdutoPage";
import PrimeiroAcesso from './Pages/Primeiro-acesso'
import Privacidade from './Pages/Privacidade'
import AdminLayout from './Admin/layout/AdminLayout'
import ProtegidoAdmin from './Admin/protecao/ProtegidoAdmin'
import PainelUsuario from './Usuario/pages/PainelUsuario'
import ProtegidoUsuario from './Usuario/protecao/ProtegidoUsuario'


//import AvHome from './deletar_aula/deletar_AtvHome'
//import Requisitos from './deletar_aula/deletar_requisicoes'
//import RequisicaoPost from './deletar_aula/deletar_requisicoesPost'
// admin
// usuario
//import ConclusaoCadastro from './Pages/Conclusao-cadastro'
//import CadastroMercado from './Pages/validar_deletar_Cadastro-mercado'
//import CadastroProduto from './Pages/validar_deletar_Cadastro-produto'
//import Comparativos from './Pages/Comparativos'
// import CadastroUsuario from './Pages/validar_deletar_Cadastro-usuario'
// import HistoricoProduto from './Pages/validar_deletar_Historico-produto'
// import AtualizacaoPreco from './Pages/validar_deletar_Atualizacao-preco'
// import AtualizacaoPrecoAdm from './Pages/validar_deletar_Atualizacao-precoAdm'
// import SugestaoProduto from './Pages/Sugestao-produtos'
//<<<<<<< HEAD
// import CadastroAdm from './Pages/validar_deletar_Cadastro-adm'
// import Cookies from './Pages/Cookies'
// =======
// import CadastroAdm from './Pages/Cadastro-adm'
//>>>>>>> 18d790cabe994808ccb09519c60d8c651634a95c
//import ProdutoChart from './Pages/ProdutoChart'
// import Condicional from './Pages/validar_deletar_condicional'
//import Rodape from './Components/rodape'
//import loginLogar from './contexts/login'
//import { UsuarioLogadoContext } from './contexts/contextAuth'
//--------------
//import ProdutoMarcaChart from "./Pages/ProdutoMarcaChart";
//--------------


//import GraficoArrozPage from "./Pages/GraficoFeijaoPage";
//import GraficoArrozPage from "./Pages/GraficoFarinhaPage";

//      <Route path="/grafico/arroz" element={<ProdutoChart nomeProduto="Arroz" />}/>
//      <Route path="/grafico/feijao" element={<ProdutoChart nomeProduto="Feijão" />}/>
//      <Route path="/grafico/farinhadetrigo" element={<ProdutoChart nomeProduto="Farinha de trigo" />}/>
//      <Route path="/grafico/macarrao" element={<ProdutoChart nomeProduto="macarrão" />}/>

// <Route path='/atualizacaopreco' element={<AtualizacaoPreco />}/>
// <Route path='/atualizacaoprecoadm' element={<AtualizacaoPrecoAdm />}/>
// <Route path='/sugestaoproduto' element={<SugestaoProduto />}/>


//      <Route path='/finalizacao' element={<ConclusaoCadastro />}/>      

//<Route path='/cadastroadm' element={<CadastroAdm />}/>
//<Route path="/grafico/:nomeProduto" element={<GraficoProdutoPage />} />
// <Route path='/cadastromercado' element={<CadastroMercado />}/>
// <Route path='/cadastroproduto' element={<CadastroProduto />}/>
// <Route path='/cadastrousuario' element={<CadastroUsuario />}/>
      // <Route path='/hisotircoproduto' element={<HistoricoProduto />}/>

      //<Route path='/condicional' element={<Condicional />}></Route>    
      
      //<Route path='/comparativos' element={<Comparativos />}/>      

      // <Route path='/requisicao' element={<Requisitos />}></Route>     
      // <Route path='/avhome' element={<AvHome />}></Route>     
      // <Route path='/post' element={<RequisicaoPost />}></Route> 

function App() {

  return (
    <Routes>
      <Route path="/grafico/arroz" element={<GraficoArrozPage />} />     
      <Route path="/grafico/macarrao" element={<GraficoMacarraoPage />} />     
      <Route path="/grafico/farinha" element={<GraficoFarinhaPage />} />     
      <Route path="/grafico/feijao" element={<GraficoFeijaoPage />} />     
      <Route path="/grafico/:nomeProduto/:peso" element={<GraficoProdutoPage />} />
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/sobre' element={<Sobre />}/>    
      <Route path='/termouso' element={<TermoUso />}/>
      <Route path='/primeiroacesso' element={<PrimeiroAcesso />}/>
      <Route path='/privacidade' element={<Privacidade />}/>
      <Route path="*" element={<NotFound />} />


 

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

