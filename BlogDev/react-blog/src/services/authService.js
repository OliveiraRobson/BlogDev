import axios from 'axios';
import qs from 'qs';

const API_URL = 'https://localhost:7195/api/'; // Substitua pelo endereço da sua API

export function loginUser(email, senha) {
    const data = {
        email,
        senha
    };
    const formData = qs.stringify(data);
    return axios.post('https://localhost:7195/api/login', formData,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => {
            if (response.data && response.data.token) {
                // Aqui você pega o token da resposta
                const token = response.data.token;

                // Salva o token no localStorage ou faz qualquer outra coisa que você queira
                localStorage.setItem('accesso', token);

                return token;  // Opcionalmente, retornar o token
            } else {
                throw new Error('Token not found');
            }
        })
        .catch(error => {
            console.error("There was an error during the login process:", error);
            // Lidar com erros (como mostrar uma mensagem de erro para o usuário, etc.)
            throw error;
        });
}

export default loginUser;

export async function registerUser(email, password) {
    try {
        const response = await axios.post(`${API_URL}/Login/register`, {
            email,
            password
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}
// export const registerUser = async (userData) => {
//     try {
//         const response = await api.post('/register', userData);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };

// export const forgotPassword = async (email) => {
//     try {
//         const response = await api.post('/forgot-password', { email });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };
