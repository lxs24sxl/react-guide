import React from 'react';
require("./SplitPane.css");
export default class SplitPane extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          { this.props.left }
        </div>
        <div className="SplitPane-right">
          { this.props.right } 
        </div>
      </div>
    );
  }
}