
import React, { useContext } from 'react';
import './FoodItem.css';
import {assets} from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {
  // creating a state variable
  const {cartItems, addToCart, removeFromCart,url} = useContext(StoreContext);

  // Map old image names to new ones
  const getCorrectImageName = (imageName) => {
    const imageMap = {
      'food_2.png': '1753724973987-food_2.png',
      'food_3.png': '1753725001806-food_3.png', 
      'food_4.png': '1753725024036-food_4.png',
      'food_5.png': '1753725052749-food_5.png',
      'food_6.png': '1753725089468-food_6.png',
      'food_7.png': '1753725135179-food_7.png',
      'food_8.png': '1753725156889-food_8.png',
      'food_9.png': '1753959557829-food_9.png',
      'food_10.png': '1753959588357-food_10.png',
      'food_11.png': '1753959620490-food_11.png',
      'food_12.png': '1753959652576-food_12.png',
      'food_13.png': '1753959676929-food_13.png',
      'food_14.png': '1753959704660-food_14.png',
      'food_15.png': '1753959726935-food_15.png',
      'food_17.png': '1753959764561-food_17.png',
      'food_18.png': '1753959797011-food_18.png',
      'food_19.png': '1753959835166-food_19.png',
      'food_20.png': '1753959869317-food_20.png',
      'food_21.png': '1753959902108-food_21.png',
      'food_22.png': '1753959948092-food_22.png',
      'food_23.png': '1753959975626-food_23.png',
      'food_24.png': '1753960163776-food_24.png',
      'food_25.png': '1753960190828-food_25.png',
      'food_26.png': '1753960218083-food_26.png',
      'food_28.png': '1753960249112-food_28.png',
      'food_29.png': '1753960294469-food_29.png',
      'food_30.png': '1753960321259-food_30.png',
      'food_31.png': '1753960346785-food_31.png',
      'food_32.png': '1754374850049-food_32.png'
    };
    
    return imageMap[imageName] || imageName;
  };


  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img 
              src={url+"/images/"+getCorrectImageName(image)} 
              className='food-item-img' 
              onError={(e) => {
                console.error('Image failed to load:', url + "/images/" + getCorrectImageName(image));
                // Try fallback: if image fails, try with a default placeholder
                e.target.src = url + "/images/placeholder.png"; // You can add a placeholder
                // Or hide the image completely
                // e.target.style.display = 'none';
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', url + "/images/" + getCorrectImageName(image));
              }}
              alt={name}
            />
            {/* if itemCount is 0 then show add icon else show the counter */}
            {/* onClick event to increase the itemCount by 1  and shows red/ green plus icon respectively */}

            {!cartItems[id] 
              ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" /> 
              : <div className='food-item-counter'>
                <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
          }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" /> 
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem