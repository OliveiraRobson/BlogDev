// PostService.js

const API_ENDPOINT = 'https://localhost:7195';

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
