import React from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [
        {
          id: '1a',
          name: 'Sony',
          avatar: '🎈'
        },
        {
          id: '2b',
          name: 'Iphone',
          avatar: '🎉'
        },
        {
          id: '3c',
          name: 'Samsung',
          avatar: '🎁'
        }
      ]
    }
  }
  render() {
    const list = this.state.productList.map((product) => (
      //khong tach file
      // <div className='product-item' key={product.id}>
      //   <input />
      //   {product.name} - {product.avatar}
      // </div>

      <ProductItem product={product} key={product.id} />
    ))
    return (
      <div>
        <h1>ProductList</h1>
        <div className='product-list'>{list}</div>
      </div>
    )
  }
}
