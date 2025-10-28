
import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import CadastroMercado from './Pages/Cadastro-mercado'
import CadastroProduto from './Pages/Cadastro-produto'
import Comparativos from './Pages/Comparativos'
import Login from './Pages/Login'
import Sobre from './Pages/Sobre'
import CadastroUsuario from './Pages/Cadastro-usuario'
import HistoricoProduto from './Pages/Historico-produto'
import AtualizacaoPreco from './Pages/Atualizacao-preco'
import AtualizacaoPrecoAdm from './Pages/Atualizacao-precoAdm'
import SugestaoProduto from './Pages/Sugestao-produtos'
import CadastroAdm from './Pages/Cadastro-adm'
import Cookies from './Pages/Cookies'

import TermoUso from './Pages/Termo-de-uso'


import ProdutoChart from './Pages/ProdutoChart'
import Condicional from './Pages/condicional'



import AvHome from './aula/AtvHome'
import Requisitos from './aula/requisicoes'
import RequisicaoPost from './aula/requisicoesPost'

//import Rodape from './Components/rodape'

//import loginLogar from './contexts/login'
//import { UsuarioLogadoContext } from './contexts/contextAuth'
import NotFound from './Pages/NotFound';
import ProdutoMarcaChart from "./Pages/ProdutoMarcaChart";




function App() {

  return (
    <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/cadastromercado' element={<CadastroMercado />}/>
      <Route path='/cadastroproduto' element={<CadastroProduto />}/>
      <Route path='/comparativos' element={<Comparativos />}/>
      <Route path='/sobre' element={<Sobre />}/>
      <Route path='/cadastrousuario' element={<CadastroUsuario />}/>
      <Route path='/hisotircoproduto' element={<HistoricoProduto />}/>
      <Route path='/atualizacaopreco' element={<AtualizacaoPreco />}/>
      <Route path='/atualizacaoprecoadm' element={<AtualizacaoPrecoAdm />}/>
      <Route path='/sugestaoproduto' element={<SugestaoProduto />}/>
      <Route path='/cadastroadm' element={<CadastroAdm />}/>
      <Route path='/termouso' element={<TermoUso />}></Route>
      <Route path='/cookies' element={<Cookies />}/>
      
      <Route path="/grafico/arroz" element={<ProdutoChart nomeProduto="Arroz" />}/>
      <Route path="/grafico/feijao" element={<ProdutoChart nomeProduto="Feijão" />}/>
      <Route path="/grafico/farinhadetrigo" element={<ProdutoChart nomeProduto="Farinha de trigo" />}/>
      <Route path="/grafico/macarrao" element={<ProdutoChart nomeProduto="macarrão" />}/>
      <Route path="*" element={<NotFound />} />

      <Route path='/condicional' element={<Condicional />}></Route>
      <Route path='/requisicao' element={<Requisitos />}></Route>     
      <Route path='/avhome' element={<AvHome />}></Route>     
      <Route path='/post' element={<RequisicaoPost />}></Route>     
      


    </Routes>

  )
}

export default App
