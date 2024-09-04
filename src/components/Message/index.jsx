import React from 'react';
import style from'./style.module.css';

const Message = (props) => {
  return (
    <div className={style.messageContainer}>
      <p className={style.messageText}>{props.text}</p>
    </div>
  );
};

export default Message;