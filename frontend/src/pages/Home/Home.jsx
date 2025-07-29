import React, { useState } from 'react'
import './Home.css'
import Headers from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  // creating a state variable to hold the category value of all categories
  // and a function to update it
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Headers/>
      {/* passing the category and setCategory as props to ExploreMenu component */}
      <ExploreMenu category={category} setCategory={setCategory}/>
      {/* passing the category as prop to FoodDisplay component */}
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home