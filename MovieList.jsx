import React from 'react';
import {Card,  Button, CardColumns, Container} from 'react-bootstrap';

const MovieList = ({ movies = [], addToCart }) => {

  const add = (movie)=>{
      addToCart(movie);
  } 
  const renderedList = movies.map(movie => {
    return (
      <Card style={{ margin:'20px',width: '12rem' }} key={movie.imdbID}>
        <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Button variant="primary" onClick={()=>add(movie)}>Add to Cart</Button>
        </Card.Body>
      </Card>
      
    );
  });

  return <Container><CardColumns>{renderedList}</CardColumns></Container>;
};

export default MovieList;