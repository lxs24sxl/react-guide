//eslint-disable-next-line
import React from 'react';
import ListItem from './ListItem';

export default class NumberList extends React.Component {
  // eslint-disable-next-line
  constructor( props ){
    super( props );
  }
  componentWillMount() {

  }
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map( number => 
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>
        { listItems }
      </ul>
    );
  }
}