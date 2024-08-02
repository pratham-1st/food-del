import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {

    const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
       <h2>Explore dishes near you.</h2>
       <div className="food-display-list">
         {
            food_list.map((item,index) => {
                return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.salad} />
            })
         }
       </div>
    </div>
  )
}

export default FoodDisplay