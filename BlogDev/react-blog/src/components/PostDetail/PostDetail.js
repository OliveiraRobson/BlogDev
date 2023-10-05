import './PostDetail.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../services/PostService'; // Função fictícia para buscar artigo por ID.
import {handleFacebookShare,handleTwitterShare,copyLinkToClipboard} from '../../utils/shareFunctions'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
function PostDetail() {
  const [article, setArticle] = useState(null);
  const { id } = useParams(); // Obtem o ID do artigo a partir da URL.
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const fetchedArticle = await getArticleById(id);
        if (!fetchedArticle) {
          throw new Error("Artigo não encontrado");
        }
        setArticle(fetchedArticle);
      } catch (error) {
        console.log("Definindo erro:", error.message);
        setError(error.message);
      }
    };

    fetchArticle();
  }, [id]);
  if (error) {
    return <div className="error-message">{error}</div>;
  }
  if (!article) {
    return <LoadingSpinner></LoadingSpinner>;
  }
 
  return (
    <div className="article-view">
      <h2>{article.titulo}</h2>
      <p><strong>Publicado em:</strong> {new Date(article.dataPublicacao).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: article.conteudo }}></div>
      <div className="article-interactions">
        <button className="like-button">
          ❤ <span className="like-count">123</span>
        </button>

        <div className="comment-section">
          <textarea placeholder="Adicione um comentário..."></textarea>
          <button className="submit-comment">Enviar</button>

          <div className="comments-list">
            <div className="single-comment">
              <img src="avatar_url" alt="Nome do Usuário" className="comment-avatar" />
              <div>
                <h4>Robson</h4>
                <p>texto muito bom</p>
              </div>
            </div>

          </div>
          <div className="share-buttons">
            <button className="share-button facebook" onClick={handleFacebookShare}>
              <i className="icon-facebook"></i> Facebook
            </button>
            <button className="share-button twitter" onClick={handleTwitterShare}>
              <i className="icon-twitter"></i> Twitter
            </button>
            <button className="share-button instagram" onClick={copyLinkToClipboard}>
              <i className="icon-instagram"></i> Copiar para Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
