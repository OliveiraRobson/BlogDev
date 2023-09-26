
import { Navigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const isLoggedIn = !!localStorage.getItem('accesso'); // Use sua própria lógica de autenticação aqui
    const location = useLocation();

    if (!isLoggedIn) {
        // Se não estiver logado, redirecione para a página de login e mantenha a localização atual para eventual redirecionamento pós-login.
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return <Outlet />;
}

export default ProtectedRoute;
