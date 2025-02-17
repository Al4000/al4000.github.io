import React, { Component } from 'react'
import Product from './Product.jsx'
import Title from './Title'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />
              <div className="row">
                <ProductConsumer>
                  {value => {
                    return value.products.map( product => {
                      return (
                        <Product 
                          key={ product.id } 
                          product={ product } 
                        />
                      )
                    })
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    )
  }
}
