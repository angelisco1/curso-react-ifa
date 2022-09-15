import React, { useRef } from 'react'
import Video from '../../../public/video.mp4'

const Cmp07Referencias = () => {
  const videoRef = useRef(0)
  // console.log(videoRef)
  // useEffect(() => {
  //   console.log(videoRef)
  // })
  return (
    <div>
      <h2>Referencias (useRef)</h2>
      <video src={Video} width="500" ref={videoRef}></video>
      <button type="button" onClick={() => videoRef.current.play()}>Play</button>
      <button type="button" onClick={() => videoRef.current.pause()}>Pause</button>
      <button type="button" onClick={() => videoRef.current.currentTime = videoRef.current.currentTime + 5}>+5s</button>
    </div>
  )
}

export default Cmp07Referencias