import React, { useState } from 'react';

import './PostDetail.css'; 
const PostDetail = ({ post }) => {
    const [likes, setLikes] = useState(123);
    const [comments, setComments] = useState([
        { author: 'John Doe', content: 'Great article! Thanks for sharing.' },
        { author: 'Jane Smith', content: 'I found this really helpful. Keep up the good work!' }
    ]);
    const [newComment, setNewComment] = useState('');

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, { author: 'Current User', content: newComment }]);
            setNewComment('');
        }
    };
  return (
    <article className="post-detail-container">
      <header className="post-header">
        <h1>{post.title}</h1>
        <time datetime={post.dateISO}>{post.date}</time>
        <div onClick={handleLike}>
                    <span className="like-icon">👍</span>
                    <span>{likes}</span>
                </div>
      </header>
   
      <main className="post-content">
        <figure>
          <img src={post.image} alt={post.title} className="post-image" />
          <figcaption>{post.imageCaption}</figcaption>
        </figure>

        <h2>Introdução</h2>
        <p>{post.introduction}</p>

        <h2>A Evolução da Programação</h2>
        <p>{post.evolution}</p>

        <h2>As Linguagens Mais Promissoras</h2>
        <ul>
          {post.languages.map((lang, index) => (
            <li key={index}><a href={lang.link}>{lang.name}</a>: {lang.description}</li>
          ))}
        </ul>

        <h2>Conclusão</h2>
        <p>{post.conclusion}</p>
  
{/* Comments Section */}
<div className="comments-section">
                <div className="comment-section-title">Comments</div>
                {comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <div className="comment-author">{comment.author} says:</div>
                        <div className="comment-content">"{comment.content}"</div>
                    </div>
                ))}

                {/* Add Comment */}
                <div className="add-comment">
                    <textarea 
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={handleCommentChange}
                    ></textarea>
                    <button onClick={handleCommentSubmit}>Post Comment</button>
                </div>
            </div>
   
      </main>
      
    </article>
  );
}

export default PostDetail;
