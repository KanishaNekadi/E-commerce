import React, { useEffect } from 'react'
import { useState } from 'react'
import Product from './Product'

function ProductList() {

    const [products , setProducts] = useState([])

    useEffect(()=>{
        
        const fetchProducts = async()=>{
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data)
        }

        fetchProducts()
    },[])

  return (
    <div class="cards" >
        <div className='heading'>
            All Products
            <div className='UL'>
                
            </div>
        </div>
        <ul class="card-list">
            {
                products.map((product)=>
                <Product key={product.id} product={product}/>
                )
            }
        </ul>
    </div>
  )
}

export default ProductList