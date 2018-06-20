//eslint-disable-next-line
import React from 'react';

export default class FlavorForm extends React.Component {
  // eslint-disable-next-line
  constructor( props ) {
    super( props );
    this.state = {
      value: "coconut"
    };
  }

  handleChange( e ) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit( e ) {
    alert(`Your favorite flavor is: ${ this.state.value }`);
    e.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={( e ) => this.handleSubmit( e )}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={ ( e ) => this.handleChange( e )}>
            <option value="grapefruit">Grapefruit</option>
            <option value="cime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      </form>
    );
  }
}