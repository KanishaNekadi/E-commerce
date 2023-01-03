import React from 'react'

function cartProduct() {
  return (
    <div class="product-page">
    <div class="product-img"><img class="card-img-top-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
    <div class="button-img">
      <button class="btn-1">Add to Card</button>
      <button class="btn-1">Buy Now</button>
    </div>
    </div>
    <div class="product-disc">
      <div class="card-body-2">
        <h2 class="card-title-2"></h2>
        <span class="card-status-2">Rs. 100</span>
        <p class="card-text-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
)
}

export default cartProduct