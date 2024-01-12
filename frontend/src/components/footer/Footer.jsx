import React from 'react'
import { Container, Row ,Col  } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './footer.css'
const quick_links=[
  {
      path: '/home',
      display: 'Home'
  },
  {
      path: '/about',
      display: 'About'
  },
  {
      path: '/tours',
      display: 'Tours'
  }
]
const quick_links2=[
  {
      path: '/Gallary',
      display: 'Gallary'
  },
  {
      path: '/Place',
      display: 'Place'
  },
  {
      path: '/TourDetails',
      display: 'TourDetails'
  }
]
export default function Footer() {
  const year = new Date().getFullYear
  return (
    <footer>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="footer_logo">
              <img src={logo} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                dolore essitatibus accusantium voluptatem. Quasi, sed!</p>
              
              <div className="social_link d-flex align-items-center gap-4">
                <span>
                  <Link to={'#'}><i class="ri-facebook-circle-fill"></i></Link>
                </span>
                <span>
                <Link to={'#'}><i class="ri-instagram-fill"></i></Link>
                </span>
                <span>
                <Link to={'#'}><i class="ri-youtube-fill"></i></Link>
                </span>
                <span>
                <Link to={'#'}><i class="ri-github-fill"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer_link_title">
              Discover
            </h5>
            <ul className="borderless">
            {
              quick_links.map((item , index)=>
                <li key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              )
            }
            </ul>
            
          </Col>
          <Col lg='3'>
          <h5 className="footer_link-title">
              Quick Links
            </h5>
            <ul>
            {
              quick_links2.map((item , index)=>
                <li key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              )
            }
            </ul>
          </Col>

          <Col lg='3'>
          <h5 className="footer_link-title">
              Contact
            </h5>
            <ul>
              <li className='d-flex gap-3 footer_link-item'>
                <h6 className='d-flex align-items-center '>
                <i class="ri-map-pin-line"></i>
                Address:
                </h6>
                <span>Hà Nam</span>
              </li>
              <li className='d-flex gap-3 footer_link-item'>
                <h6 className='d-flex align-items-center '>
                <i class="ri-mail-line"></i>
                Email:
                </h6>
                <span>thanhhuyle285@gmail.com</span>
              </li>
              <li className='d-flex gap-3 footer_link-item'>
                <h6 className='d-flex align-items-center '>
                <i class="ri-phone-line"></i>
                Phone:
                </h6>
                <span>0392238895</span>
              </li>
            </ul>
          </Col>
          <Col lg='12'>
            <div className="text-center copyright">
              <p>@Copyright {year} by Lê Huy Thanh following Coding With Muhib</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
