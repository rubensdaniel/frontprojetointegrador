import React from 'react';
import '../Style/NotFound.css'

const NotFound: React.FC = () => {
  return (
    <div className='notfound'>
      <h1>404 - Página não encontrada</h1>
      <p>A rota que você acessou não existe.</p>
    </div>
  );
};

export default NotFound;