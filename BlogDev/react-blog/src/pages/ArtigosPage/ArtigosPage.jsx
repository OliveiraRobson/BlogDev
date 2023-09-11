import React from 'react';
import ArtigoCard from './ArtigoCard';

function ArtigosPage() {
    const sampleArticle = {
        title: "Título do Artigo",
        summary: "Resumo do artigo...",
        imageURL: "URL_DA_IMAGEM_DO_ARTIGO",
        imageAlt: "Descrição da imagem"
    };

    return (
        <div>
            <ArtigoCard article={sampleArticle} />
            {/* Renderize outros ArtigoCards conforme necessário */}
        </div>
    );
}

export default ArtigosPage;
