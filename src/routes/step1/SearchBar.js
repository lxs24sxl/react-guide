import React from 'react';
import PropType from 'prop-types';

// import { PhotoStory, VideoStory } from './stories';

// const components = {
//   photo: PhotoStory,
//   video: VideoStory,
// };

// const SpecificStory = components[ props.storyType ];
// return <SpecificStory story={props.story} />;


const MyComponent = {
  DatePicker: function DatePicker( props ) {
    return <div>Imageine a { props.color } datepicker here.</div>
  }
}

function NumberDescriber( props ) {
  let description;
  console.log( props.message);
  description = (props.number % 2 == 0 )? <strong>even</strong>: <i>odd</i>;
  return <div>{props.number} is an {description} number.</div>
}

export default class SearchBar extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      // value: '',
      // isShowStock: false
    };
    this.textInput = null;
    this.handleInputChange = this.handleInputChange.bind( this );
  }

  static propTypes = {
    name: PropType.number
  }

  handleInputChange( e ) {
    this.props.handleChange( e );
    // console.log( this.input.value );
  }

  componentDidMount() {
    console.log( this.refs.checkbox );
  }

  render() {
    console.log( "this.props.name",this.props.name );
    
    const valueInputProps = { ref: (input) => {this.textInput = input;}, name: "value", value: this.props.value, onChange: this.handleChange };
    return (
      <div>
        <input {...valueInputProps}/>
        <br />
        <input
          ref="checkbox"
          name="isShowStock"
          type="checkbox"
          checked={this.props.isShowStock}
          onChange={this.handleInputChange}
          />
        Only Show Products in stock
        <br />
        <MyComponent.DatePicker color="blue" />
        <NumberDescriber number={4} message="&lt;3"/>
      </div>
    );
  }
}