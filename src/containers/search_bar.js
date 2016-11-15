import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

    //if passing a callback around (e.g., onChange={this.onInputCHange} in rendered input, and the callback has a reference to 'this', need to bind the context
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({term: event.target.value});
	}

  onFormSubmit(event) {
    //tells browser not to submit form when enter is clicked as default HTML action dictates
    event.preventDefault();

    //here we go and fetch weather data
  }

  render() {
  	return (
  		<form onSubmit={this.onFormSubmit} className="input-group">
  		  <input 
  		    placeholder="Get a 5 day forecast in your favorite cities"
  		    className="form-control"
  		    value={this.state.term}
  		    onChange={this.onInputChange} />
  		  <span className="input-group-btn">
  		    <button type="submit" className="btn btn-secondary"> Submit </button>
  		  </span>
  		</form>
  	);
  }
}