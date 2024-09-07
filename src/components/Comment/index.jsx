import React from 'react';
import style from'./style.module.css';

const Comments = (props) => {
  return (
    <li className={style.comment__item} key={props.comment.id}>
      {props.comment.text}
      <button className={style.comment__deleteButton} onClick={() => props.deleteComment(props.comment.id)}>Удалить</button>
    </li>
  );
};

export default Comments;