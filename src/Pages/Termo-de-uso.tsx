import '../Style/sobre.css'
import Header from '../Components/Cabecalho';


function TermoUso() {
    return (
<>
  <Header />
  <div className="termos-uso">
  <h2>Termos de Uso</h2>
  <p><strong>Última atualização:</strong> [coloque a data]</p>

  <h3>1. Objeto</h3>
  <p>
    O Aplicativo tem como finalidade disponibilizar aos usuários informações sobre preços e características de produtos e serviços,
    permitindo a comparação entre diferentes fornecedores e lojas, parceiras ou não.
  </p>

  <h3>2. Uso do Aplicativo</h3>
  <ul>
    <li>O Aplicativo deve ser utilizado apenas para fins pessoais e não comerciais.</li>
    <li>É proibido utilizar o Aplicativo para práticas ilegais, enganosas, fraudulentas ou que violem direitos de terceiros.</li>
    <li>O acesso poderá ser suspenso ou interrompido em caso de uso indevido.</li>
  </ul>

  <h3>3. Fontes de Informação</h3>
  <ul>
    <li>As informações de preços, produtos e serviços são obtidas de fontes externas (lojas online, marketplaces, entre outros).</li>
    <li>Não há garantia de que os preços exibidos estejam sempre atualizados, pois podem variar em tempo real conforme o fornecedor.</li>
    <li>O usuário deve confirmar os dados diretamente no site ou loja responsável pela venda.</li>
  </ul>

  <h3>4. Responsabilidades</h3>
  <p>O Aplicativo não realiza vendas, apenas exibe e compara informações.</p>
  <p>Não nos responsabilizamos por:</p>
  <ul>
    <li>Diferenças de preços entre o valor exibido e o praticado pelo fornecedor.</li>
    <li>Qualidade, disponibilidade ou entrega dos produtos adquiridos junto a terceiros.</li>
    <li>Eventuais perdas ou danos decorrentes do uso das informações apresentadas.</li>
  </ul>

  <h3>5. Cadastro e Conta de Usuário (quando aplicável)</h3>
  <ul>
    <li>Alguns recursos podem exigir a criação de uma conta.</li>
    <li>O usuário é responsável por manter a confidencialidade de suas credenciais.</li>
    <li>É proibida a criação de contas falsas ou a utilização de dados de terceiros sem autorização.</li>
  </ul>

  <h3>6. Privacidade</h3>
  <p>
    O tratamento de dados pessoais segue a nossa <strong>Política de Privacidade</strong>, que descreve como coletamos,
    utilizamos e protegemos as informações dos usuários.
  </p>

  <h3>7. Propriedade Intelectual</h3>
  <ul>
    <li>Todos os direitos relacionados ao Aplicativo, incluindo marca, logotipo, design, layout e funcionalidades, pertencem aos desenvolvedores.</li>
    <li>É vedado copiar, modificar, distribuir ou comercializar qualquer parte do Aplicativo sem autorização prévia.</li>
  </ul>

  <h3>8. Alterações nos Termos</h3>
  <p>
    Estes Termos de Uso podem ser modificados periodicamente. Recomendamos que o usuário os consulte regularmente
    para estar ciente de eventuais alterações.
  </p>

  <h3>9. Legislação e Foro</h3>
  <p>
    Estes Termos são regidos pela legislação brasileira. Qualquer disputa será resolvida no foro da comarca de
    <strong> Bauru/SP</strong>.
  </p>
  </div>
</>

)
  
}

export default TermoUso;