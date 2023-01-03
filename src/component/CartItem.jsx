import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/CardSlice'

function CartItem({item}) {

    const dispatch = useDispatch()

    const removeItem = (item) => {
        dispatch(remove(item))
    }

  return (
 <li className="list-group-item px-2  d-flex justify-content-between align-items-center ">
    <img className="cart-image m-4" src={item.image} alt=""/>
    <span className="p-2">
        <h4>{item.title}</h4>
        <span className="d-flex justify-content-between align-items-center">
            <h4 className="">Rs. {item.price}</h4> 
            <button className="btn btn-danger btn-sm rounded-0" onClick={() => removeItem(item.id)}>Remove</button>
        </span>
    </span>
 </li>
  )
}

export default CartItem