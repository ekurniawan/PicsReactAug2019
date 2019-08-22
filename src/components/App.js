import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  onSearchSubmit = searchText => {
    //console.log('Dari App: - '+searchText);
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: searchText },
      headers: {
        Authorization:
          "Client-ID 4525193718da2d9f4ef7759f4fad0909c2a523a8dc62135d82721e72ed7ac71f"
      }
    });
  };

  render() {
    return <SearchBar onSubmit={this.onSearchSubmit} />;
  }
}

export default App;
