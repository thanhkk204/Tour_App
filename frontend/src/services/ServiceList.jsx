import React from 'react'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'
const serviceData =[
    {
        imgURL: weatherImg,
        title: "Abou weather",
        desc: "The weather is the most thing that is decided to you can go travel , picnic"
    },
    {
        imgURL: guideImg,
        title: "Abou Guide",
        desc: "The one who bring you to anywhere memories"
    },
    {
        imgURL: customizationImg,
        title: "Abou Customization",
        desc: "Customization is the clothes you can wear in the place you go"
    }
]
export default function ServiceList() {
  return <>
    {
        serviceData.map((item , index)=>(
            <Col key={index} lg='3'>
                <ServiceCard item={item} />
            </Col>
        ))
    }
  </>
}
