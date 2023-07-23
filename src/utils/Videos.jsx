import React from 'react'
import backgroundVideo from './ai.mp4'
export default function Videos() {
  return (
    <video autoplay loop muted id = "video">
        <source  src={backgroundVideo} type="video/mp4"/>
    </video>
  )
}
