import React from 'react';

export default class BoilingVerdict extends React.Component {
  constructor( props ) {
    super( props );

  }

  render() {
    const celsius = this.props.celsius;
    return (
      {
        celsius >= 100? 
          <p> The water would boil.</p>: 
          <p>The water would not boil.</p>
      }
    );
  }
}