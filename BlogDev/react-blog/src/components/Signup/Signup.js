import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import './Signup.css';
import { registerUser } from '../../services/authService';  // Esta função deve ser definida no serviço de autenticação.

function Signup() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        setError('');

        try {
            // Esta função deve enviar os dados para a API para criar uma nova conta.
            await registerUser(email, password,nome);
            navigate('/login');
        } catch (err) {
            // Trate erros de cadastro aqui.
            setError('Ocorreu um erro ao tentar se cadastrar.');
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Cadastro</h2>
                <label htmlFor="email">Nome</label>
                <input id="email" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome" required />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite seu email" required />

                <label htmlFor="password">Senha</label>
                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" required />

                <label htmlFor="confirm-password">Confirme a Senha</label>
                <input id="confirm-password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme sua senha" required />

                <button type="submit">Cadastrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <a href="/login" className="login-link">Já tem uma conta? Faça login</a>
            </form>
        </div>
    );
}

export default Signup;
