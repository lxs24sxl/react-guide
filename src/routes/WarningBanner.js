// eslint-disable-next-line
import React, {Component } from 'react';
export default class WarningBanner extends Component {
  //eslint-disable-next-line
  constructor( props ) {
    super( props )
  }
  render() {
    const numbers = [1,2,3,4,5];
    const doubled = numbers.map( number => number * 2);
    console.log(doubled);
    if (!this.props.warn ) {
      return null;
    }

    return (
      <div className="warning">
        Warning
      </div>
    )
  }
}
