import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/CardSlice'
import {Link} from 'react-router-dom'


function Product({product}) {

  const dispatch = useDispatch()

  const handleAdd = (product) => {
    dispatch(add(product))
  }

  return (
    <li>
        <div class="card">
           <Link to={`/Product/${product.id}`}>
              <div className='img'>
              <img class="card-img-top" src={product.image} alt="Card image cap"/>
              </div>
            </Link>
              <div class="card-body">
               <h5 class="card-title">{product.title}</h5>
                <a href="#" class="card-price"><h4><b>₹{product.price}</b></h4></a>
                <p class='card-delivery btn btn-light'>Free Delivery</p>
              </div>
              <div class='rating-sec'> 
              <h4 className='card-rating btn btn-success align-content-center'>{product.rating.rate}</h4>
              <p class='card-count'>{product.rating.count} Review</p>
              </div>
              <button className="btn btn-danger w-100" onClick={()=>handleAdd(product)}>Add to cart</button>
        </div>
    </li>
  )
}

export default Product