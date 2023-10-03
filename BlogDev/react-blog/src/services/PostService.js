// PostService.js
import axios from 'axios';

const API_ENDPOINTLocal = 'https://localhost:7195';
const API_ENDPOINT = 'https://vidaembits-001-site1.ftempurl.com';


export default class PostService {
  static async fetchPosts() {
    try {
      const response = await fetch(`${API_ENDPOINT}/Posts`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error("Houve um problema ao buscar os posts:", error);
      throw error;
    }
  }

  // Você pode adicionar outros métodos relacionados a posts, como para criar um novo post, atualizar ou excluir um post, etc.
}
export const getCategoria = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/Posts/Categoria`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const saveArticle = async (articleData) => {
  try {
    const response = await axios.post(`${API_ENDPOINT}/Posts/criarPost`, articleData, {
      headers: {
        'Content-Type': 'application/json',
        // Se você tiver autenticação, adicione o cabeçalho aqui, por exemplo:
        // 'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Erro ao salvar o artigo: ' + response.statusText);
    }
  } catch (error) {
    console.error('Houve um erro ao tentar salvar o artigo:', error);
    throw error;
  }
};



export async function getArticleById(id) {
  try {
      const response = await fetch(`${API_ENDPOINT}/Posts/GetPostByID?id=${id}`);
      if (!response.ok) {
          console.log("error");
          throw new Error("Erro ao buscar o artigo");
      }
      const data = await response.json();
      if (!data || Object.keys(data).length === 0) {
        throw new Error("Artigo não encontrado");
     }
      return data;
  } catch (error) {
      throw error;
  }
}