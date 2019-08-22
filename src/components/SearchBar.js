import React from 'react';

class SearchBar extends React.Component{
    state = {searchText:''};

    onInputChange = (event)=>{
        this.setState({searchText:event.target.value});
        //console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchText);
    }

    render(){
        return (
          <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
              <div className="field">
                <label>Image Search</label>
                <input type="text" onChange={this.onInputChange} />
                
              </div>
            </form>
          </div>
        );
    }
}

export default SearchBar;