import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './ArticleEditor.css'; 

function ArticleEditor() {
  const [content, setContent] = useState(localStorage.getItem('savedArticle') || '');

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image', 'video', 'blockquote'],
      [{ 'align': [] }],
      [{ 'table': [] }]
    ],
  };

  const handleChange = (value) => {
    setContent(value);
    localStorage.setItem('savedArticle', value);
  };

  return (
    <div className="article-editor-container">
      <ReactQuill 
        value={content} 
        onChange={handleChange} 
        modules={modules}
        placeholder="Digite seu artigo aqui..."
      />
      <button onClick={() => console.log(content)}>Salvar Artigo</button>
      <div className="word-count">
        {content.split(/\s+/).filter(Boolean).length} palavras
      </div>
    </div>
  );
}

export default ArticleEditor;
