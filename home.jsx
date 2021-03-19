import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }
  
  addToCart = (movie)=>{
        this.props.addToCart(movie);
  }

  onSearchChange = async searchValue => {
    const response = await axios.get('http://www.omdbapi.com/?s='+searchValue+'&apikey=dbf27f44');
    if (response.data.Response) {
      this.setState({
        movies: response.data.Search
      });
    }
  };

  render() {
    return (<>
        <SearchBar onSearchChange={this.onSearchChange} /> 
        <MovieList movies={this.state.movies} addToCart={this.addToCart}></MovieList>
        </>
    );
  }
}
export default Home;