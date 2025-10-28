import '../Style/Cookies.css'

function Cookies(){
    return(
        <>
  <header>
    <h1>Política de Cookies</h1>
  </header>

  <main>
    <h2>O que são cookies?</h2>
    <p>
      Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles ajudam a melhorar sua experiência, lembrar preferências e analisar o uso do site.
    </p>

    <h2>Tipos de cookies que usamos</h2>
    <table className="cookie-table">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Finalidade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Essenciais</td>
          <td>Necessários para o funcionamento do site.</td>
        </tr>
        <tr>
          <td>Funcionais</td>
          <td>Personalizam a experiência do usuário.</td>
        </tr>
        <tr>
          <td>Analíticos</td>
          <td>Coletam informações sobre como o site é usado.</td>
        </tr>
        <tr>
          <td>Publicidade</td>
          <td>Exibem anúncios relevantes para você.</td>
        </tr>
      </tbody>
    </table>

    <h2>Como gerenciar cookies</h2>
    <p>
      Você pode optar por desativar cookies diretamente no seu navegador. No entanto, algumas funcionalidades do site podem não funcionar corretamente.
    </p>

    <h2>Mais informações</h2>
    <p>
      Para saber mais sobre cookies, visite <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">All About Cookies</a>.
    </p>
  </main>

  <footer>
    &copy; 2025 Sua Empresa. Todos os direitos reservados.
  </footer>

        </>
    )
    
}

export default Cookies;
