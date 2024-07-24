import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose form a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings ans elevate your dining experience, one delicious meal at a time.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
                return(
                   <div onClick={() => setCategory(prev => prev===item.menu_name?"All" : item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category === item.menu_name?'active' : ""} src={item.menu_image} alt="" />
                        <h2>{item.menu_name}</h2>
                   </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu