import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id, name, image, price, description, category}) => {
  const [itemCount, setItemCount] = useState(0)
  const {cartItems, addToCart, removeCart} = useContext(StoreContext);

  return (

    <div className="food-item">
        <div className="food-item-image-container">
            <img src={image} className='food-item-image'/>
            {
              !cartItems[id]
              ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
              : <div className='food-item-counter'>
                    <img className='food-add' onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img className='food-discard' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <h2 className="food-item-name">{name}</h2>
                <img src={assets.rating_starts} />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem