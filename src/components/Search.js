import React, { Component } from "react";

export default class Search extends Component {
  state = { term: "" };

  onInputChange = evt => {
    this.setState({
      term: evt.target.value
    });
  };


  onSubmitSearch = event => {
    event.preventDefault();

    const { onSearchSubmit } = this.props;
    const { term } = this.state;
    onSearchSubmit(term);
  };

  render() {
    return (
      <div className="ui  olive segment ">
        <form className="ui form" onSubmit={this.onSubmitSearch}>
          <div className="field">
            <label>Search Youtube Video</label>
            <input className="ui  olive segment "
              type="text" 
              placeholder="Youtube video"                                                                              
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
