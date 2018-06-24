import React from "react";

export default class ProductRow extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    let props = this.props;
    return (
      <div>
        <ul className="clearfix">
          <li>{ props.name }</li>
          <li>{ props.price }</li>
        </ul>
      </div>
    ); 
  }
}