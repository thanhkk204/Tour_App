import React from 'react'
import './serviceCard.css'

export default function ServiceCard({item}) {
    const {imgURL , title , desc} = item
  return <div className="service_item">
    <div className="service_img">
        <img src={imgURL} alt="" />
    </div>
    <h5>{title}</h5>
    <p>{desc}</p>
  </div>
}
