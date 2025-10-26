import React, { useState } from 'react'

const Restaurant = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantLocation, setRestaurantLocation] = useState('');

  const addRestaurantHandler = () => {
    // Logic to add restaurant
  };

  return (
    <div>
        <h1>Restaurant</h1>
        <button onClick={addRestaurantHandler}>Add Restaurant</button>
        <button>Restaurant List</button>
    </div>
  )
}

export default Restaurant