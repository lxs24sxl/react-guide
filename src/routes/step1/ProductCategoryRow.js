import React from 'react';

export default class ProductCategoryRow extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="title">
        <b>{ this.props.title }</b>
        <br/>
      </div>
    );
  }
}