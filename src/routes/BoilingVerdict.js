import React from 'react';

export default class BoilingVerdict extends React.PureComponent {
  constructor( props ) {
    super( props );

  }

  render() {
    const celsius = this.props.celsius;
    
      if (celsius >= 100 ){
        return <p> The water would boil.</p>
      } else {
        return <p>The water would not boil.</p>
      }
  }
}