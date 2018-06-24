import React from 'react';

export default class FancyBorder extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    let props = this.props;
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        { props.children }
      </div>
    );
  } 
}