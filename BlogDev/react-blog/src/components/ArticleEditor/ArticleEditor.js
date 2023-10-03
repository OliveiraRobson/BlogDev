import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ArticleEditor.css';
import { getUsuarioById } from '../../services/authService';  // Esta função deve ser definida no serviço de autenticação.
import { getCategoria,saveArticle, } from "../../services/PostService";



function ArticleEditor() {
    const [content, setContent] = useState(localStorage.getItem('savedArticle') || '');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [usuario, setUsuario] = useState({ id: null, nome: "" });
    const [errorMessage, setErrorMessage] = useState(null);

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'font': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike', 'code'], // Adicione 'code' aqui
            [{ 'color': [] }, { 'background': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image', 'video', 'blockquote'],
            [{ 'align': [] }],
            [{ 'table': [] }]
        ],
    }

    const [, setError] = useState(null);
    const usuarioID = localStorage.getItem("usuarioID"); // Por exemplo

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getUsuarioById(usuarioID);
                setUsuario(result);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [usuarioID]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const categorias = await getCategoria();
                setCategories(categorias);
            } catch (err) {
                console.error("Erro ao buscar categorias:", err);
            }
        };

        fetchCategorias();
    }, []);
    const handleSaveArticle = async () => {
        try {
            const articleData = {
                usuarioID: usuario.id,
                categoriaID: selectedCategory,
                conteudo: content,
                titulo: title,
                urlImg: "",
                dataPublicacao: new Date().toISOString().split('T')[0]
            };
   
            const result = await saveArticle(articleData);
        } catch (error) {
            console.error("Houve um erro ao salvar:", error);
            setErrorMessage("Houve um erro ao salvar o artigo. Por favor, tente novamente.");
        }
    };
    const handleChange = (value) => {
        setContent(value);
        localStorage.setItem('savedArticle', value);
    };



    return (
        <div className="article-editor-container">
             {errorMessage && <div style={{ color: 'red', marginTop: '20px' }}>{errorMessage}</div>}
            <div className="user-details">
                <div className="user-info">
                    <label>Usuário:</label>
                    <span>{usuario.name}</span>
                </div>
                <div className="title-input">
                <label>Título:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Digite o título do artigo"
                />
            </div>
                <div className="category-selection">
                    <label>Categoria:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="" disabled>Selecione uma categoria</option>
                        {categories.map(cat => (
                            <option key={cat.categoriaID} value={cat.categoriaID}>
                                {cat.nome}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <ReactQuill
                value={content}
                onChange={handleChange}
                modules={modules}
                placeholder="Digite seu artigo aqui..."
            />
            <button onClick={handleSaveArticle}>Salvar Artigo</button>
            <div className="word-count">
                {content.split(/\s+/).filter(Boolean).length} palavras
            </div>
        </div>
    );
}

export default ArticleEditor;
