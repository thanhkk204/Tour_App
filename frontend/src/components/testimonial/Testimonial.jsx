import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed:2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
    ]
}
  return (
        <Slider {...settings}>
                <div className="testimonial py-4 px-3">
                    <p>It was a great experience for me, I have never been to a place with such attractive services as here</p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava01} alt="" style={{width:'25px', height:'25px' , borderRadius:'50px'}}/>
                        <div>
                            <h6>John</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial py-4 px-3">
                    <p>It was a great experience for me, I have never been to a place with such attractive services as here</p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava02} alt="" style={{width:'25px', height:'25px' , borderRadius:'50px'}} />
                        <div>
                            <h6>John</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial py-4 px-3">
                    <p>It was a great experience for me, I have never been to a place with such attractive services as here</p>
                    <div className="d-flex align-items-center gap-4 mt-3">
                        <img src={ava03} alt="" style={{width:'25px', height:'25px' , borderRadius:'50px'}} />
                        <div>
                            <h6>John</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                </div>
        </Slider>
  )
}
