import React from 'react';
import {Card,  Button, CardColumns, Container} from 'react-bootstrap';

const Cart = ({ cartItems = [], removeFromCart }) => {

  const remove = (movie)=> {
        removeFromCart(movie);
    }
  const renderedList = cartItems.map(movie => {
    return (
      <Card style={{ margin:'20px',width: '12rem' }} key={movie.imdbID}>
        <Card.Img variant="top" src={movie.Poster} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Button variant="primary" onClick={()=>remove(movie)}>Remove</Button>
        </Card.Body>
      </Card>
      
    );
  });

  return <Container><CardColumns>{renderedList}</CardColumns></Container>;
};

export default Cart;