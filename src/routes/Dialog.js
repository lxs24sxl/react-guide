import React from 'react';
import FancyBorder from './FancyBorder';

export default class Dialog extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    let props = this.props;
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {  props.title }
        </h1>
        <p className="Dialog-message">
          { props.message }
        </p>
        { props.children }
      </FancyBorder>
    );
  }
}