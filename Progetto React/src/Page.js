import React, {useState} from 'react';
import './Page.css';
import {
  InputGroup, InputGroupAddon, Input, Button,
  } from 'reactstrap';
import BookCard from './BookCard';
import axios from 'axios';

const Header = () => {

  const [book, setBook] = useState('');
  const [result, setResult] = useState ([]);
  
  const apiKey = 'AIzaSyD-_B8XZr7hot71wvNTfUklhImVnHrLQHU';

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}`)
      .then(data => {
        setResult(data.data.items);
      })
  }

  return (
    <div>
      <div className='sfondo'></div>
      <div className='blocco'>
        <h1 className='testo'>Book Finder</h1>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input className='input' type='text' onChange={handleChange} placeholder='Inserisci titolo o autore'/>
            <InputGroupAddon addonType="append">
              <Button style={{backgroundColor: '#1a1a1a'}} type='submit'><i className="fas fa-search" style={{color: 'white'}}></i></Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
      <div className='bookCard'>
      {result.map( book => (
        <BookCard
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors}
          image={book.volumeInfo.imageLinks.thumbnail}
          link={book.volumeInfo.previewLink}
        />
      ))}
      </div>
    </div>
  );
}

export default Header;
