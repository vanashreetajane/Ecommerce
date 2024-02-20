import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt=''/>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            INR {props.new_price}
        </div>
        <div className="item-price-old">
            INR {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
