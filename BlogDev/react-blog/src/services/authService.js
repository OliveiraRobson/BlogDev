import axios from 'axios';
import qs from 'qs';


export function loginUser(email, senha) {
    const data = {
        email,
        senha
    };
    // const formData = qs.stringify(data);
    const formData = qs.stringify(data);

    return axios.post('https://vidaembits-001-site1.ftempurl.com/api/Login/', formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {

        if (response.data && response.data.usuarioinfo.token) {
            // Aqui você pega o token da resposta
            const token = response.data.usuarioinfo.token;
            localStorage.setItem('usuarioID',response.data.usuarioinfo.id);
            // Salva o token no localStorage ou faz qualquer outra coisa que você queira
            localStorage.setItem('accesso', token);

            return token;  // Opcionalmente, retornar o token
        }
    })
        .catch(error => {
            console.error("There was an error during the login process:", error);
            // Lidar com erros (como mostrar uma mensagem de erro para o usuário, etc.)
            throw error;
        });

}

export default loginUser;

export async function registerUser(email, password,nome) {
    const data = {
        primeiroNome: nome,
        email: email,
        password:password
    };

    return axios.post('http://vidaembits-001-site1.ftempurl.com/api/Login/register', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => {
        if (response.data && response.data.token) {
            // Aqui você pega o token da resposta
            const token = response.data.token;

            // Salva o token no localStorage ou faz qualquer outra coisa que você queira
            localStorage.setItem('accesso', token);

            return token;  // Opcionalmente, retornar o token
        }
    })
        .catch(error => {
            console.error("There was an error during the login process:", error);
            // Lidar com erros (como mostrar uma mensagem de erro para o usuário, etc.)
            throw error;
        });
}



const baseUrl = 'https://vidaembits-001-site1.ftempurl.com/api/Usuarios';

export const getUsuarioById = async (usuarioID) => {
    try {
        const response = await axios.get(`${baseUrl}?usuarioID=${usuarioID}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};