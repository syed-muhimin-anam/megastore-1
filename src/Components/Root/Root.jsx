import React from 'react'

import Sweiper from './sweiper'
import FeaturedCategory from '../Category/FeaturedCategory'
import Deal from '../Deal'

const Root = () => {
  return (
    <div>
        {/* <Navbar></Navbar> */}
        <Sweiper></Sweiper>
        <FeaturedCategory></FeaturedCategory>
        <Deal></Deal>
    </div>
  )
}

export default Root