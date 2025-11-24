import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAutenticacao } from "../../Auth/hooks/useAutenticacao";

interface Props {
  children: ReactNode;
}

function ProtegidoAdmin({ children }: Props) {
  const { usuario } = useAutenticacao();

  // Somente admins podem acessar
  if (!usuario || usuario.tipo !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtegidoAdmin;
