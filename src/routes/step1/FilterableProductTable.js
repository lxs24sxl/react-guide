import React from 'react';
require('./main.css');
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
export default class FilterableProductTable extends React.Component {

  static defaultProps = {
    name: "filterable"
  };

  constructor( props ) {
    super( props );
    this.state = {
      value: "",
      isShowStock: false,
      data: [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
      ],
      name: this.props.name,
    };
    this.handleInputChange = this.handleInputChange.bind( this );
  }
  // input事件改变
  handleInputChange( e ) {
    const target = e.target;
    console.log( e );
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log( name );
    this.setState({
      [name]: value
    });
  }
  // 渲染
  render() {
    return (
      <div className="filter-wrapper">
        <SearchBar 
          name={this.state.name}
          value={this.state.value}
          isShowStock={this.state.isShowStock}
          handleChange={this.handleInputChange }
          />
        <ProductTable
          data={this.state.data}
          isShowStock={this.state.isShowStock }
          >
        </ProductTable>
      </div>
    );
  }
}