import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: '' };
  }
  
  onInputChange = event => {
    this.setState({ searchValue: event.target.value });
    this.props.onSearchChange(event.target.value);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Search Movies</label>
            <input
              type="text"
              value={this.state.searchValue}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;