import React from 'react';

class SearchBar extends React.Component{
    state = {searchText:''};

    onInputChange = (event)=>{
        this.setState({searchText:event.target.value});
        //console.log(event.target.value);
    }

    onClick = () => {
        console.log(`Data Input: ${this.state.searchText}`);
    }

    render(){
        return (
          <div className="ui segment">
            <form className="ui form">
              <div className="field">
                <label>Image Search</label>
                <input type="text" onChange={this.onInputChange} />
                <button type="button" className="ui primary button" onClick={this.onClick}>Click Me</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;