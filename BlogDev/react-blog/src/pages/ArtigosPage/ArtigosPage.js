

import React from 'react';
import PostDetail from '../../components/PostDetail/PostDetail';


const fakePost = {
    title: "O Futuro da Programação",
    date: "10 de setembro de 2023",
    dateISO: "2023-09-10",
    image: "https://fakeimageurl.com/sample.jpg",
    imageCaption: "Ilustração do futuro da programação",
    introduction: "O mundo da programação está sempre em constante evolução...",
    evolution: "Desde os primeiros computadores até as mais recentes inovações em inteligência artificial...",
    languages: [
      { name: "Python", link: "#", description: "..." },
      { name: "Rust", link: "#", description: "..." },
      { name: "Go", link: "#", description: "..." },
    ],
    conclusion: "A programação continuará a desempenhar um papel fundamental na definição do nosso futuro..."
  }

const ArtigosPage = () => {
    return (
       
        <div>
           <div>
            <PostDetail post={fakePost} />
            {/* Renderize outros ArtigoCards conforme necessário */}
            </div>
        </div>
       
    );
}

export default ArtigosPage;
