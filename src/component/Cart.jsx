import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function Cart() {

    const items = useSelector((state) => state.cart)

  return (
    <div className='container'>
        <ul className='list-group mt-5'>
            {
                items.map((item) => (
                <CartItem key={item.id} item={item}/>
                ))
            }
        </ul>
    </div>
  )
}

export default Cart