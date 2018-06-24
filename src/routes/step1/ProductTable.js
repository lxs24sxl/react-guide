import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      filterData: {}
    };
  }


  componentDidMount() {
    // console.log(this.props.data );
    let oProps = this.props;
    console.log(oProps.data);
    this.filterDataMethod(oProps.data, oProps.isShowStock )
  }
  filterDataMethod( data,isShowStock ) {
    let oProps = this.props;
    let oData = data.filter(item => isShowStock? item.stocked: true);
    let tempObj = new Object();
    let objCate = null;
    for ( let i = 0, len = oData.length; i < len; i++ ) {
      let oTemp = oData[ i ];
      let curCate = oTemp.category;
      objCate = tempObj[ curCate ];
      if ( !objCate ) tempObj[ curCate ] = new Array(); 
      tempObj[ curCate ].push( oTemp );
    }
    this.setState({
      filterData: tempObj,
    });
  }
  componentWillReceiveProps( nextProps ) {
    console.log( "nextProps:",nextProps );
    this.filterDataMethod( nextProps.data, nextProps.isShowStock )
  }

  render() {
    let oState = this.state;
    let oFilterData = oState.filterData;
    let sportList = [];
    let electronicsList = [];
    for ( let k in oFilterData ) {
      if ( k === 'Electronics' ) {
        electronicsList = oFilterData[ k ].map( item => (
          <ProductRow key={ item.name } name={item.name} price={item.price}></ProductRow>
        ));
      } else {
        sportList = oFilterData[ k ].map( item => (
          <ProductRow key={ item.name } name={item.name} price={item.price}></ProductRow>
        ))
      }
    }
    return (
      <div className="product-table-wrapper">
        <ul className="clearfix">
          <li>Name</li>
          <li>Price</li>
        </ul>
        <ProductCategoryRow title="Sporting Goods"></ProductCategoryRow>
        {sportList}
        <ProductCategoryRow title="Electronics"></ProductCategoryRow>
        {electronicsList}
      </div>
    );
  }
}