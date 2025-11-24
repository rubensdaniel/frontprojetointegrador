import { createContext, useState } from "react";
import type { ReactNode } from "react";

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  tipo: "admin" | "usuario";
}

interface AutenticacaoContextProps {
  usuario: Usuario | null;
  login: (usuario: Usuario) => void;
  logout: () => void;
}

export const AutenticacaoContext = createContext<AutenticacaoContextProps | null>(null);

interface PropsProvider {
  children: ReactNode;
}

export function AutenticacaoProvider({ children }: PropsProvider) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  function login(usuarioRecebido: Usuario) {
    setUsuario(usuarioRecebido);
  }

  function logout() {
    setUsuario(null);
    localStorage.removeItem("token");
  }

  return (
    <AutenticacaoContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AutenticacaoContext.Provider>
  );
}
