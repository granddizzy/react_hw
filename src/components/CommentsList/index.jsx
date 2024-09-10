import React, {useEffect, useState} from 'react';
import Comment from '../Comment';
import style from './style.module.css';

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const beginData = [];
    beginData.push({
      id: crypto.randomUUID(),
      text: 'Это первый комментарий',
    });
    beginData.push({
      id: crypto.randomUUID(),
      text: 'Это второй комментарий',
    });
    beginData.push({
      id: crypto.randomUUID(),
      text: 'Это третий комментарий',
    });
    setComments(beginData);
  }, []);

  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const addComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: crypto.randomUUID(),
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div className={style.comments__container}>
      <h2 className={style.comments__title}>Список комментариев</h2>
      <ul className={style.comments__list}>
        {comments.map((comment) => (
          <Comment comment={comment} deleteComment={deleteComment} key={comment.id}/>
        ))}
      </ul>

      <div className={style.addCommentSection}>
        <input
          className={style.addCommentSection__input}
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Введите новый комментарий"
        />
        <button className={style.addCommentSection__addButton} onClick={addComment}>Добавить комментарий</button>
      </div>
    </div>
  );
};

export default CommentsList;