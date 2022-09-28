import React from 'react'
import Video from '../assets/MBA Chai Wala.mp4'
const IntoVideo = () => {
  return (
    <div className='intro'>
<video src={Video} muted autoPlay loop controlsList='nodownload'></video>
<div></div>
    </div>
  )
}

export default IntoVideo