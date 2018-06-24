// eslint-disable-next-line
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Comment from './Comment.js';
import Clock from './Clock.js';
import WarningBanner from './routes/WarningBanner';
import NumberList from './routes/NumberList';
import Blog from "./routes/Blog";
import NameForm from './routes/NameForm';
import EssayForm from './routes/EssayForm';
import FlavorForm from './routes/FlavorForm';
import Reservation from './routes/Reservation';
import Calculator from './routes/Calculator';
import SplitPane from './routes/SplitPane';
import SignUpDialog from './routes/SignUpDialog';
import FilterableProductTable from './routes/step1/FilterableProductTable';
// eslint-disable-next-line
function formatName( user ) {
  return user.firstName + ' ' + user.lastName;
};
// eslint-disable-next-line
const user = {
  firstName: 'Xiaoshun',
  lastName: 'lin'
};
// eslint-disable-next-line
function getGreeting( user ) {
  if ( user ) return <h1>Hello, {formatName( user )}</h1>;
  return <h1>Hello, Stranger.</h1> 
}
// const ele = <img src={user.avatarUrl} />;
// const ele2 = (
//   <h1 className="greeting">
//     Hello world!
//   </h1>
// );

// const ele3 = React.craeteElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
// function getEle() {
//   return ele3;
// }
// eslint-disable-next-line
function Welcome( props ) {
  return <h1>Hello, {props.name}</h1>
}

// eslint-disable-next-line
function UserGreeting( props ) {
  return <h1>Welcome back!</h1>;
}

// eslint-disable-next-line
function GuestGreeting( props ) {
  return <h1>Please sign up.</h1>;
}

// eslint-disable-next-line
function Greeting( props ) {
  return props.isLoggedIn? <UserGreeting />: <GuestGreeting />;
}

// eslint-disable-next-line
function LoginButton( props ) {
  return (
    <button onClick={props.onClick}>Login</button>
  );
}
// eslint-disable-next-line
function LogoutButton( props ) {
  return (
    <button onClick={props.onClick}>Logout</button>
  );
}
// eslint-disable-next-line
function Greeting2( props ) {
  return props.isLoggedIn? LogoutButton: LoginButton;
};



class App extends Component {
  constructor( props ) {
    // eslint-disable-next-line
    super( props ),
    this.state = {
      time: 2000,
      isLoggedIn: false,
      messages: ['React', 'Re: React', 'Re:Re: React'],
      showWarning: false,
      posts: [
        { id: 1, title: "Hello World", content: "Welcome to learning React!" },
        { id: 2, title: "Installation", content: "You can install React from npm" },
      ]
    };
    // this.testClick = this.testClick.bind( this );
  }
  handleLoginClick() {
    let messages = this.state.messages;
    messages.splice( messages.length - 1 , 1);
    console.log("messages",messages);
    // this.state.messages.splice(this.state.messages.length, 1);
    // let messages = this.state.messages;
    this.setState({
      isLoggedIn: true,
      messages: messages
    });

  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  testClick() {
    console.log("lxs");
    this.setState( prevState => ({
      time: prevState.time + 100
    }));
    // console.log( this.state.time );
  }
  changeLog() {
    this.setState( prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));

  }
  handleToggleClick() {
    this.setState( prevState => ({
      showWarning: !(prevState.showWarning)
    }));
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;

    button = isLoggedIn? <LogoutButton onClick={this.handleLogoutClick.bind(this)}/>
                      :<LoginButton onClick={this.handleLoginClick.bind(this)}/>

    const unreadMessages = this.state.messages;
    const numbers = [1,2,3,4,5];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Welcome to React, It is {new Date().toLocaleTimeString()}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={( e ) => this.testClick( e )}>测试点击</button>
        <div>
          <Clock time={this.state.time}/>
          {getGreeting(user)}
          {this.state.time }
          <Welcome name="lxs" />
          <Welcome name="linxiaoshun" />
          <Welcome name="linxiaoshun2" />
          <button onClick={( e ) => this.changeLog(e )}>切换</button>
          <Greeting isLoggedIn={isLoggedIn}></Greeting>
          {button}
        </div>
        <div>
          <h1>Hello!</h1>
          { unreadMessages.length > 0  && 
            <h2>
              You hava { unreadMessages.length  } unread messages;
            </h2>
          }
        </div>
        <div>
          The user is <b>{isLoggedIn ? 'currently': 'not' }</b> Logged in.
        </div>
        <WarningBanner warn={this.state.showWarning}></WarningBanner>
        <button onClick={() => this.handleToggleClick()}>
          {this.state.showWarning ? 'Hide': 'Show' }
        </button>
        <NumberList numbers={numbers}></NumberList>
        <Blog posts={this.state.posts}></Blog>
        <NameForm></NameForm>
        <EssayForm></EssayForm>
        <FlavorForm></FlavorForm>
        <Reservation></Reservation>
        <Calculator></Calculator>
        <SplitPane left={<text>左邊</text>} right={<text>右邊</text>}> </SplitPane>
        <SignUpDialog></SignUpDialog>
        <FilterableProductTable></FilterableProductTable>
      </div>

    );
  }
}

export default App;
