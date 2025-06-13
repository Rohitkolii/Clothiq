import React from 'react'
import "./Loader.css"

const Loader = () => {
  return (
    <div className='load'>
      <div className='loadercon'>
        <div class="loader"></div>
        <p>Fetching Data from Database!</p>
        <p>This may take few seconds!</p>
      </div>
    </div>
  )
}

export default Loader