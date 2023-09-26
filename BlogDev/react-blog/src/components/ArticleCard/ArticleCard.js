
import './ArticleCard.css';
import Pagination from '../Pagination/Pagination';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
                console.log(data);
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Houve um problema ao buscar os posts:", error);
                setLoading(false);
            });
    }, []);


    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='app-container'>

            <div ref={topRef} className='artigos-list' >
                {articlesToShow.map(post =>
                (
                    <Link to={`/article/${post.postID}`} className="article-link">
                        <div className="artigo-card" key={post.postID}>
                            <div className="artigo-image-overlay"></div>
                            <img src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a3eb13545%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a3eb13545%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2299.12312316894531%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' alt={post.titulo} className="artigo-image" />
                            <div className="artigo-content">
                                <h3 className="artigo-title">{post.titulo}</h3>
                                <div className="artigo-category">{post.categoria}</div>
                                <Link  className="artigo-author">
                                    <i className="icon-user"></i>
                                    {post.titulo}
                                </Link>
                                <p className="artigo-date">
                                    <i className="icon-calendar"></i>
                                    {post.dataPublicacao}
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

