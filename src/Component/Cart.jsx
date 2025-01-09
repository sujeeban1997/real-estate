import React from 'react'
import {  useCart } from "react-use-cart";

function Cart() {
          const {
                    isEmpty,
                    totalUniqueItems,
                    items,
                    removeItem,
                  } = useCart();
                
                  if (isEmpty) return <p className='empty-message-view'>Your Favourite list is empty</p>;

  return (
          <>
          <div className='fav-Items container'>
          <div className='container'>
                    <div className="top-banner">
                              <h1>Your Favourite List </h1>
                    </div>
                
                    {items.map((item) => (
                              <div className='card'  key={item.id}>
                                        <div className='row'>
                                                  <div className='col-lg-4'>
                                                            <img className="fav-image-view" src={item.imgSrc} alt='' />
                                                  </div>
                                                  <div className='col-lg-8'>
                                                            <div className='fav-details'>
                                                                      <h4>{item.name}</h4>
                                                                      <h6>{item.bedrooms}</h6>
                                                                      <h6>$ {item.price}</h6>
                                                                      <button className='btn btn-outline-danger px-4 py-2' onClick={() => removeItem(item.id)}>Delete Property</button>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>  
                     ))}                       
          </div>
    </div>
        </>
  )
}

export default Cart