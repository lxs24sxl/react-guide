// eslint-disable-next-line
import React, { Component } from 'react'; 


class Clock extends React.Component {
  constructor( props ) {
    super( props );
    this.state  = { 
      date: new Date(),
      counter: 0,
      time: 1000,
      isLoggedIn: false
    };
  }
  componentWillMount() {
    console.log("componentWillMount");
    this.setState({
      time: this.props.time
    }); 
    console.log( this.props.time );
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(
      () => this.tick(),
      this.state.time
    );
  }
  componentWillReceiveProps( nextProps ) {
    console.log("componentWillReceiveProps");
    console.log( "nextProps",nextProps.time );
    this.setState(prevState => ({
      time: nextProps.time
    }));
    clearInterval(this.timerID);
    this.timerID = setInterval(
      () => this.tick(),
      this.state.time
    );
  }
  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate");
  // }
  componentWillUpdata( nextProps ) {
    console.log("componentWillUpdata");

    this.setState(prevState => ({
      time: nextProps.time
    }));
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }
  // shouldComponentUpdate( nextProps, nextState ) {
  //   console.log( "newTime ", nextProps.time );
  //   console.log( "oldTime ", this.props.time );
  //   if ( nextProps.time === this.props.time ) {
  //     return false;
  //   }
  // }
  componentWillUnmount() {
    console.log("componentWillUnmount");

    clearInterval( this.timerID );
  }

  tick() {
    // this.setState({
    //   date: new Date()
    // });
    this.setState(( prevState, props ) => ({
      date: new Date(),
      counter: prevState.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is { this.state.date.toLocaleTimeString()}.</h2>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

export default Clock;