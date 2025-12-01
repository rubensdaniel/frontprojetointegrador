// import { createContext, useState } from "react";
// import type { ReactNode } from "react";

// type ContextType = {
//   name: string;
//   setName: (n: string) => void;
//   senha: string;
//   setSenha: (s: string) => void;
// };

// export const UsuarioLogadoContext = createContext<ContextType | null>(null);

// export const UsuarioLogadoProvider = ({ children }: { children: ReactNode }) => {
//   const [name, setName] = useState("");
//   const [senha, setSenha] = useState("");

//   return (
//     <UsuarioLogadoContext.Provider value={{ name, setName, senha, setSenha }}>
//       {children}
//     </UsuarioLogadoContext.Provider>
//   );
// };