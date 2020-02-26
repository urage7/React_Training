import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => {
                this.setState({ term: e.target.value });
                //Controliran component, pazi dannite ot searchBar-a v state:terms
                //s pomoshtta na value koeto vzema infoto ot setState ot callBack-a na e "e=>{...}"
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
