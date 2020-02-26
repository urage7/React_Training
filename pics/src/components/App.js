import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos/?client_id=tPXNEO4kDzT9J19EEK8-v-Bp-pD0KySZM1ZBMR3iCQQ",
      {
        params: { query: term },
        headers: {
          Authorizatioin:
            "Client-ID tPXNEO4kDzT9J19EEK8-v-Bp-pD0KySZM1ZBMR3iCQQ"
        }
      }
    );
    console.log(response.data.results);
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
