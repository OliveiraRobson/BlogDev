const apiUrl = "https://seu-endereco-api.com/api/articles";
            
const token = localStorage.getItem('accesso');

export const saveArticle = async (content) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: content })
        });

        if (!response.ok) {
            throw new Error('Erro ao salvar o artigo.');
        }

        return await response.json();
    } catch (error) {
        console.error("Houve um erro:", error);
        throw error;
    }
}
