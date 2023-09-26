import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';

import './Login.css';
import { loginUser } from '../../services/authService';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    function isUserLoggedIn() {
        const token = localStorage.getItem('accesso');
        return !!token;  // Retorna true se o token existir, false caso contrário
    }
    useEffect(() => {
        if (isUserLoggedIn()) {
            navigate('/');  // Redireciona para a página inicial
        }
    }, [navigate]);
   
    const handleLogin = async (e) => {
        e.preventDefault();  // Impede o comportamento padrão de recarregar a página
        setError('');
 

        try {
      
          const isLoggedIn = await loginUser(email, password).then(token => {
            if(token){

                setIsLoggedIn(true);
                navigate('/'); 
            }
           
        })
        .catch(err => {
            if (err.response) {
                // Erros retornados pela API (ex: 400, 401, 403, etc.)
                setError(err.response.data.message || 'Erro ao tentar fazer login.');
            } else if (err.request) {
                // Erro de conexão (API não respondeu)
                throw new  setError('Não foi possível conectar-se à API.');
            } else {
                // Outros erros (por exemplo, erros na configuração do axios)
                throw new  setError('Ocorreu um erro ao tentar fazer login.');
            }
            console.error("Login failed:", error);
        });
        } catch (err) {
            
        }
     
    };    

    return (
        <div>
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Login</h2>

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" required  />

                    <label htmlFor="password">Senha</label>
                    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" required />

                    <button type="submit">Entrar</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <a href="/forgot-password" className="forgot-password-link">Esqueceu a senha?</a>
                    <a href="/signup" className="signup-link">Não tem uma conta? Cadastre-se</a>
                </form>
            </div>

        </div>
    );
}

export default Login;

