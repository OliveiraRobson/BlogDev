
import './ArticleCard.css';
import Pagination from '../Pagination/Pagination';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
function ArticleCard() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const topRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const articlesToShow = posts.slice((currentPage - 1) * 6, currentPage * 6);
    const handlePageChange = (page) => {
        setCurrentPage(page);

        // Rolar para o topo da div dos artigos
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        fetch('https://vidaembits-001-site1.ftempurl.com/Posts') // Ajuste essa URL conforme necessário
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Houve um problema ao buscar os posts:", error);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <div className='app-container'>

            <div ref={topRef} className='artigos-list' >
                {articlesToShow.map(post =>
                (
                    <Link to={`/article/${post.postID}`} className="article-link">
                        <div className="artigo-card" key={post.postID}>
                            <div className="artigo-image-overlay"></div>
                            <img src={post.urlImg} alt={post.titulo} className="artigo-image" />
                            <div className="artigo-content">
                                <h3 className="artigo-title">{post.titulo}</h3>
                                <div className="artigo-category">{post.categoria}</div>
                                <Link  className="artigo-author">
                                    <i className="icon-user"></i>
                                    {post.titulo}
                                </Link>
                                <p className="artigo-date">
                                    <i className="icon-calendar"></i>
                                    {post.dataPublicacao.toISOString().split('T')[0]}
                                </p>
                            </div>
                        </div>
                    </Link>

                ))}

            </div>
            <Pagination
                articlesTotal={posts.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>

    );

}

export default ArticleCard;

