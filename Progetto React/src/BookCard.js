import React from 'react';
import style from './BookCard.module.css';

const BookCard = ({title, author, image, link}) => {
  return (
    <div className={style.bookCard}>
      <h5>{title}</h5>
      <h6>{author}</h6>
      <a target='_blank' href={link} alt={title}><img src={image} alt={title}/></a>
    </div>
  )
}

export default BookCard;
