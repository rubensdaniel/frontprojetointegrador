import "../Style/Cookies.css";
import Header from '../Components/Cabecalho';
import Rodape from '../Components/Rodape';

export default function QuemSomos() {
  return (
    <>
    <Header />
    <main>
      <div className="text-center">
        <h1>Quem Somos Nós</h1>
        <p className="text-muted">
          Transparência, economia e praticidade no seu dia a dia.
        </p>
      </div>

      <section>
        <h2>Nosso Propósito</h2>
        <p>
          O <strong>Comparaki</strong> é uma plataforma desenvolvida para oferecer
          uma forma simples e acessível de comparar preços de alimentos em
          diferentes mercados da cidade. Nosso objetivo é conectar os usuários
          aos locais com os <strong>melhores preços</strong>, promovendo economia
          de tempo e dinheiro.
        </p>
        <p>
          Mais do que um comparador, o Comparaki representa o compromisso com a{" "}
          <strong>inovação, simplicidade e economia</strong> no cotidiano dos
          consumidores.
        </p>
      </section>

      <section>
        <h2>Missão, Visão e Valores</h2>
        <ul>
          <li>
            <strong>Missão:</strong> Tornar o acesso à informação de preços mais
            transparente e acessível, ajudando consumidores a economizar de forma
            consciente.
          </li>
          <li>
            <strong>Visão:</strong> Ser referência local em comparação de preços
            e expandir para novas regiões, contribuindo para uma economia mais
            justa e equilibrada.
          </li>
          <li>
            <strong>Valores:</strong> Transparência, simplicidade, compromisso
            com o consumidor e melhoria contínua.
          </li>
        </ul>
      </section>

      <section>
        <h2>Nossa Equipe</h2>
        <p>
          O Comparaki é mantido por uma equipe dedicada e multidisciplinar,
          inspirada na colaboração dos <strong>Vingadores</strong>, cada um
          contribuindo com sua especialidade para alcançar um objetivo comum.
        </p>
        <ul>
          <li>
            <strong>Tony Stark</strong> — Engenheiro de Software e Arquiteto de
            Sistemas.
          </li>
          <li>
            <strong>Steve Rogers</strong> — Gerente de Projeto.
          </li>
          <li>
            <strong>Natasha Romanoff</strong> — Analista de Segurança e
            Privacidade.
          </li>
          <li>
            <strong>Bruce Banner</strong> — Cientista de Dados.
          </li>
          <li>
            <strong>Clint Barton</strong> — Especialista em Usabilidade e
            Testes.
          </li>
          <li>
            <strong>Thor Odinson</strong> — Designer de Interface e Experiência
            do Usuário (UI/UX).
          </li>
        </ul>
      </section>

      <section>
        <h2>Nossa História</h2>
        <p>
          Durante a guerra, <strong>Steve Rogers</strong> enfrentou a fome e a
          dificuldade de encontrar alimentos acessíveis. A falta de informações
          confiáveis sobre preços mostrava o quanto era difícil garantir uma
          alimentação digna em tempos de crise. Inspirados por essa realidade,
          criamos o <strong>Comparaki</strong> — uma ferramenta que simboliza a
          busca por igualdade de acesso, economia e informação.
        </p>
      </section>

      <section>
        <h2>Contato e Localização</h2>
        <p>
          📞 <strong>Telefone:</strong> (14) 99999-8888
        </p>
        <p>
          📧 <strong>E-mail:</strong> carlito@tevez.com
        </p>
        <p>
          📍 <strong>Localização:</strong> Top secret — para mais informações,
          entre em contato com a <strong>S.H.I.E.L.D.</strong>
        </p>
      </section>
    </main>
    <Rodape />
    </>
  );
}





