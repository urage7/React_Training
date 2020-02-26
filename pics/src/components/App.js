import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "/search/photos/", //?client_id=tPXNEO4kDzT9J19EEK8-v-Bp-pD0KySZM1ZBMR3iCQQ",   Second choise for client authorization! with ID
      {
        params: { query: term }
      }
    );
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
