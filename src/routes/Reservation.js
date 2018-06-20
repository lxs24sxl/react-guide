import React from 'react';

export default class Reservation extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange( e ) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  // handleSubmit( e ) {
  //   alert(`Your Reservation is: ${ this.state.value }`);
  //   e.preventDefault();
  // }
  render() {
    return (
      <form onSubmit={( e ) => this.handleSubmit( e )}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
            />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
            />
        </label>
        {this.state.isGoing.toString().toUpperCase().toLowerCase()}
        {this.state.numberOfGuests}
      </form>
    );
  }
}