import React from "react";
import SearchBar from "./SearchBar";
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

  state = {images:[]};
  onSearchSubmit = async (searchText) => {
    //console.log('Dari App: - '+searchText);
    const response = await unsplash.get("/search/photos", {
      params: { query: searchText }
    });
    
    //console.log(response.data.results);
    this.setState({images:response.data.results});
  }

  render() {
    return (
    <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
    </div>
   );
  }
}

export default App;
