
import React from 'react';
import {Nav,Navbar, Button, Modal} from 'react-bootstrap';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './home';
import Cart from './cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], cartItems: [] ,showPopup : false};
  }

  componentDidMount() {
  }

  addToCart = (movie)=>{
    let items = this.state.cartItems;
    for(let i = 0;i<items.length;i++){
      if(items[i].imdbID === movie.imdbID){
        this.setState({showPopup:true});
        return;
        
      }
    }
    this.setState({cartItems:[...this.state.cartItems,movie]});
  }

  removeFromCart = (movie)=>{
    let items = this.state.cartItems;
    for(let i = 0;i<items.length;i++){
      if(items[i].imdbID === movie.imdbID){
        items.splice(i,1);
        break;
      }
    }
    this.setState({cartItems:items});
  }

  handleClose = ()=>{
    this.setState({showPopup:false});
  }

  render() {
    return (
      <Router>
        <div className="ui container">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">IMDB</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart(
                <span style={{ color: "#F00", padding: "0px 5px" }}>
                  {this.state.cartItems.length}
                </span>
                )
              </Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route path="/home">
              <Home
                movies={this.state.movies}
                addToCart={this.addToCart}
              ></Home>
            </Route>
            <Route path="/cart">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
              ></Cart>
            </Route>
            <Route path="/">
              <Home
                movies={this.state.movies}
                addToCart={this.addToCart}
              ></Home>
            </Route>
          </Switch>
        </div>

        <Modal show={this.state.showPopup} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>This Item already present in the Card</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Router>
    );
  }
}

export default App;