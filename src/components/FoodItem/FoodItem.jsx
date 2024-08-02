import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id, name, image, price, description, category}) => {
  return (
    <div className="food-item">
        <div className="food-item-image-container">
            <img src={image} className='food-item-image'/>
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