import React from 'react'
import Navbar from './Navbar'
import Sweiper from './sweiper'
import FeaturedCategory from '../Category/FeaturedCategory'

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Sweiper></Sweiper>
        <FeaturedCategory></FeaturedCategory>
    </div>
  )
}

export default Root