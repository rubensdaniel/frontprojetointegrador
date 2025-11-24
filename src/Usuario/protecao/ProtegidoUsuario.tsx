import { Navigate } from "react-router-dom";
import { useAutenticacao } from "../../Auth/hooks/useAutenticacao";
import type { JSX } from "react";

function ProtegidoUsuario({ children }: { children: JSX.Element }) {
  const { usuario } = useAutenticacao();

  if (!usuario || usuario.tipo !== "usuario") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtegidoUsuario;
