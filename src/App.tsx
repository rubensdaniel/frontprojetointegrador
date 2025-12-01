import { Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import TermoUso from './Pages/Termo-de-uso'
import Sobre from './Pages/Sobre'
import NotFound from './Pages/NotFound';
import GraficoArrozPage from "./Pages/GraficoArrozPage";
import GraficoMacarraoPage from "./Pages/GraficoMacarraoPage";
import GraficoFarinhaPage from "./Pages/GraficoFarinhaPage";
import GraficoFeijaoPage from "./Pages/GraficoFeijaoPage";
import GraficoProdutoPage from "./Pages/GraficoProdutoPage";
import PrimeiroAcesso from './Pages/Primeiro-acesso'
import Privacidade from './Pages/Privacidade'

function App() {

  return (
    <Routes>
      <Route path="/grafico/arroz" element={<GraficoArrozPage />} />     
      <Route path="/grafico/macarrao" element={<GraficoMacarraoPage />} />     
      <Route path="/grafico/farinha" element={<GraficoFarinhaPage />} />     
      <Route path="/grafico/feijao" element={<GraficoFeijaoPage />} />     
      <Route path="/grafico/:nomeProduto/:peso" element={<GraficoProdutoPage />} />
      <Route path='/' element={<Home />}/>
      <Route path='/sobre' element={<Sobre />}/>    
      <Route path='/termouso' element={<TermoUso />}/>
      <Route path='/primeiroacesso' element={<PrimeiroAcesso />}/>
      <Route path='/privacidade' element={<Privacidade />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )}

export default App

