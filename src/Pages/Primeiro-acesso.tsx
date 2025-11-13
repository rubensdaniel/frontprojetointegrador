import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Cabecalho";
import "../Style/primeiroAcesso.css";

function PrimeiroAcesso() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // hook para navegação

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const startApp = () => {
    // redireciona para a rota principal (Home)
    navigate("/");
  };

  return (
    <>
      <Header />

      <main className="primeiro-acesso">
        <div className="container">
          {step === 1 && (
            <section className="welcome-section">
              <h1>Bem-vindo ao Comparaki</h1>
              <p className="subtitle">
                Encontre os melhores preços de alimentos nos mercados da sua cidade.
              </p>
              <div className="illustration">🛒</div>
              <button className="btn-primary" onClick={nextStep}>
                Continuar
              </button>
            </section>
          )}

          {step === 2 && (
            <section className="tutorial-section">
              <h2>Como funciona</h2>
              <div className="steps">
                <div className="step-card">
                  <span className="step-icon">🔍</span>
                  <h3>1. Pesquise</h3>
                  <p>Busque produtos e veja onde estão mais baratos.</p>
                </div>

                <div className="step-card">
                  <span className="step-icon">⚖️</span>
                  <h3>2. Compare</h3>
                  <p>Compare preços entre mercados e descubra as melhores ofertas.</p>
                </div>

                <div className="step-card">
                  <span className="step-icon">💰</span>
                  <h3>3. Economize</h3>
                  <p>Compre de forma inteligente e economize no dia a dia.</p>
                </div>
              </div>
              <button className="btn-primary" onClick={nextStep}>
                Entendi
              </button>
            </section>
          )}

          {step === 3 && (
            <section className="final-section">
              <h2>Pronto para começar?</h2>
              <p>Vamos te ajudar a fazer sua próxima compra com mais economia.</p>
              <div className="illustration">🥦</div>
              <button className="btn-primary" onClick={startApp}>
                Começar Agora
              </button>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default PrimeiroAcesso;

