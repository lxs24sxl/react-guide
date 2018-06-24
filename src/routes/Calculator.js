import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

function toCelsius( fahrenheit ) {
  return ( fahrenheit - 32 ) * 5 / 9;
}

function toFahrenheit( celsius ) {
  return ( celsius * 9 / 5 ) + 32;
}

function tryConvert( temperature, convert ) {
  const input = parseFloat( temperature );
  if ( Number.isNaN(input ) ) {
    return '';
  }
  const output = convert(input );
  const rounded = Math.round( output * 1000) / 1000;
  return rounded.toString();
}

export default class Calculator extends React.Component {
  constructor( props ) {
    super( props );
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      temperature: "",
      scale: "c"
    };
    this.handleCelsiuChange = this.handleCelsiuChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiuChange( temperature ) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange( temperature ) {
    this.setState({ scale: "f", temperature });
  }

  handleChange( e ) {
    this.setState({
      temperature: e.target.value,
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert( temperature, toCelsius ): temperature;
    const fahrenheit = scale === 'c'? tryConvert( temperature, toFahrenheit ): temperature;

    return (
      <div>
        <TemperatureInput
          temperature={ celsius}
          scale="c" 
          onTemperatureChange={this.handleCelsiuChange}
          />
        <TemperatureInput 
          scale="f" 
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
          />
        <BoilingVerdict celsius={parseFloat( celsius )}/>
      </div>
    );
  }
}