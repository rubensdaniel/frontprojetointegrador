import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { useEffect, useState } from "react";
//import type { User } from '@supabase/supabase-js';
//import { supabase } from '../integrations/supabase/client';
//import { LogOut, Store, Package } from "lucide-react";
import "./Hero.css";

const Hero = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user ?? null);
//     });

//     const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user ?? null);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
 // };

  return (
    <section className="hero">
      <div className="hero-container">
        <h1><Link to="/" className="logo-link">Comparaki</Link></h1>
        <p>Encontre os menores preços em mercados</p>
        <p>Compare produtos e economize nas suas compras</p>

        {/* <div className="buttons">
          {user ? (
            <>
              <button className="primary" onClick={() => navigate("/register-market")}>
                <Store /> Cadastrar Mercado
              </button>
              <button className="primary" onClick={() => navigate("/register-product")}>
                <Package /> Cadastrar Produto
              </button>
              <button className="outline" onClick={handleLogout}>
                <LogOut /> Sair
              </button>
            </>
          ) : (
            <>
              <button className="primary" onClick={() => navigate("/login")}>
                Entrar
              </button>
              <button className="outline" onClick={() => navigate("/signup")}>
                Cadastrar
              </button>
            </>
          )}
        </div> */}

        <div className="stats">
          <span>🏪 +50 mercados</span>
          <span>📦 +1000 produtos</span>
          <span>💰 Economia garantida</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
