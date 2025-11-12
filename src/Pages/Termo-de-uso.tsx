import '../Style/Cookies.css';
import Header from '../Components/Cabecalho';


function TermoUso() {
    return (
<>
  <Header />
      <main>
      <div className="text-center">
        <h1>Termos de Uso</h1>
        <p className="text-muted">
          <strong>Última atualização:</strong> 11 de Novembro de 2025
        </p>
      </div>

      <section>
        <h2>1. Objeto</h2>
        <p>
          O Aplicativo tem como finalidade disponibilizar aos usuários informações sobre preços e características de
          produtos e serviços, permitindo a comparação entre diferentes fornecedores e lojas, parceiras ou não.
        </p>
      </section>

      <section>
        <h2>2. Uso do Aplicativo</h2>
        <ul>
          <li>O Aplicativo deve ser utilizado apenas para fins pessoais e não comerciais.</li>
          <li>É proibido utilizar o Aplicativo para práticas ilegais, enganosas, fraudulentas ou que violem direitos de terceiros.</li>
          <li>O acesso poderá ser suspenso ou interrompido em caso de uso indevido.</li>
        </ul>
      </section>

      <section>
        <h2>3. Fontes de Informação</h2>
        <ul>
          <li>As informações de preços, produtos e serviços são obtidas de fontes externas (lojas online, marketplaces, entre outros).</li>
          <li>Não há garantia de que os preços exibidos estejam sempre atualizados, pois podem variar em tempo real conforme o fornecedor.</li>
          <li>O usuário deve confirmar os dados diretamente no site ou loja responsável pela venda.</li>
        </ul>
      </section>

      <section>
        <h2>4. Responsabilidades</h2>
        <p>O Aplicativo não realiza vendas, apenas exibe e compara informações.</p>
        <p>Não nos responsabilizamos por:</p>
        <ul>
          <li>Diferenças de preços entre o valor exibido e o praticado pelo fornecedor.</li>
          <li>Qualidade, disponibilidade ou entrega dos produtos adquiridos junto a terceiros.</li>
          <li>Eventuais perdas ou danos decorrentes do uso das informações apresentadas.</li>
        </ul>
      </section>

      <section>
        <h2>5. Cadastro e Conta de Usuário (quando aplicável)</h2>
        <ul>
          <li>Alguns recursos podem exigir a criação de uma conta.</li>
          <li>O usuário é responsável por manter a confidencialidade de suas credenciais.</li>
          <li>É proibida a criação de contas falsas ou a utilização de dados de terceiros sem autorização.</li>
        </ul>
      </section>

      <section>
        <h2>6. Privacidade</h2>
        <p>
          O tratamento de dados pessoais segue a nossa <strong>Política de Privacidade</strong>, que descreve como
          coletamos, utilizamos e protegemos as informações dos usuários.
        </p>
      </section>

      <section>
        <h2>7. Propriedade Intelectual</h2>
        <ul>
          <li>
            Todos os direitos relacionados ao Aplicativo, incluindo marca, logotipo, design, layout e funcionalidades,
            pertencem aos desenvolvedores.
          </li>
          <li>
            É vedado copiar, modificar, distribuir ou comercializar qualquer parte do Aplicativo sem autorização prévia.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Alterações nos Termos</h2>
        <p>
          Estes Termos de Uso podem ser modificados periodicamente. Recomendamos que o usuário os consulte regularmente
          para estar ciente de eventuais alterações.
        </p>
      </section>

      <section>
        <h2>9. Legislação e Foro</h2>
        <p>
          Estes Termos são regidos pela legislação brasileira. Qualquer disputa será resolvida no foro da comarca de{" "}
          <strong>Bauru/SP</strong>.
        </p>
      </section>
    </main>
</>

)
  
}

export default TermoUso;