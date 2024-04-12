import React from 'react'
import { products } from '../data'
import { SingleProduct } from './SingleProduct';

export const Products = () => {

  console.log(products);
  //ES7+React-ot fel kell rakni

  return (
    <div className="container">
    <div className='d-flex justify-content-center gap-3 flex-wrap p-3 bg-gray '>
      <h3 className='w-100 m-2 '>Our Products</h3>
      {products.map(obj=><SingleProduct key={obj.id} {...obj}/>)}
    </div></div>
  )
}

