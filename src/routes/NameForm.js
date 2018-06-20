// eslint-disable-next-line
import React, { Component } from 'react';

export default class NameForm extends Component {
  // eslint-disable-next-line
  constructor( props ) {
    super( props );
    this.state = {
      value: ""
    }
  }

  handleChange( e ) {
    // console.log( e.target );
    this.setState({ value: e.target.value.toUpperCase() });
  }

  handleSubmit( e ) {

    alert(`A name was submitted: ${this.state.value}`);
    e.preventDefault();
  }

  render() {

    return (
      <form onSubmit={ ( e ) => this.handleSubmit( e ) }> 
        <label>
          Name: 
          <input type="text" value={ this.state.value } onChange={( e ) => this.handleChange( e ) }/>
        </label>
        <input type="submit" value="提交"></input>
      </form>
    );
  }
} 