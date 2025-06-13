import React from 'react'
import "./Loading.css"

const Loading = () => {
  return (
    <div className='loadin'>
      <div className='loadingcon'>
        <div class="loading"></div>
        <p>Loading!</p>
        <p>This may take few seconds!</p>
      </div>
    </div>
  )
}

export default Loading