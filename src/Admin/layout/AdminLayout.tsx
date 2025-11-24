import { Outlet, Link } from "react-router-dom";
import "./admin.css";

function AdminLayout() {
  return (
    <div className="admin-container">
      
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Painel Admin</h2>

        <nav>
          <ul>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/admin/usuarios">Usuários</Link></li>
            {/* Adicione mais seções depois */}
          </ul>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main className="admin-content">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;
