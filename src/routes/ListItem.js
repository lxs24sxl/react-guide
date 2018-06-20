//eslint-disable-next-line
import React from 'react';

export default class ListItem extends React.Component {
  // eslint-disable-next-line
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <li>{this.props.value}</li>
    );
  }
}