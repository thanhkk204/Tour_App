import React from 'react'
import {Container , Row , Col} from 'reactstrap'
import imgHero from '../assets/images/hero-img01.jpg'
import imgHero02 from '../assets/images/hero-img02.jpg'
import videoHero from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedList from '../components/featuredList/FeaturedList'
import MasonryImageGallery from '../components/image_gallery/MasonryImageGallery'
import '../style/home.css'
import Testimonial from '../components/testimonial/Testimonial'
import NewLetter from '../shared/newletter/NewLetter'
export default function Home() {
  return <>
    {/* ==============hero section */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={'Know Before You Go'}/>
                    <img src={worldImg} alt="" />
                </div>
                <h1>Travels open the door to creating <span className="highlight">memories</span></h1>
                <p> Notice the use in the tags above.
                    It will be replaced with the URL of the `public` folder during the build.
                    Only files inside the `public` folder can be referenced from the HTML.</p>
              </div>
          </Col>
          <Col lg='2'>
              <div className="hero__img-box">
                <img src={imgHero} alt="" />
              </div>
          </Col>
          <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={videoHero} alt="" controls/>
              </div>
          </Col>
          <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={imgHero02} alt="" />
              </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/* ==========end hero section */}
    {/* ============service Hero======== */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services_subtitle">What we serve</h5>
            <h2 className="services_title">We offer you best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/* ============service Hero======== */}
    {/* ==========Featured Hero========= */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured_tour_title">Our Feature Tour</h2>
          </Col>
          <FeaturedList/>
        </Row>
      </Container>
    </section>
    {/* ==========Featured Hero========= */}
    {/* ==========Experience secsion========= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
              <div className="experience_content">
                <Subtitle subtitle={'Experience'} />
                <h2>With all our experience <br/> We will serve you</h2>
                <p>Trải nghiệm rất tốt vượt ngoài tầm mong đợi của tôi <br/> việc trải nghiệm dịch vụ khiến tôi có con mắt khác với nơi </p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12K+</span>
                  <h6>Success Trip</h6>
                </div>
                <div className="counter_box">
                  <span>2K+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter_box">
                  <span>15+</span>
                  <h6>Experience</h6>
                </div>
              </div>
          </Col>
          <Col lg='6'>
            <div className="experience_img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
     {/* ==========Experience secsion========= */}
     {/* ==========Img gallery============= */}
     <secsion>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className="gallery_title">Visit our customes gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImageGallery/>
          </Col>
        </Row>
      </Container>
     </secsion>
     {/* ==========Img gallery============= */}
     {/* ==========Testimonial============= */}
     <secsion>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Testimonials'} />
            <h2 className="gallery_title">Visit our customer's Testimonial</h2>
          </Col>
          <Col lg='12'>
            <Testimonial/>
          </Col>
        </Row>
      </Container>
     </secsion>
     {/* ==========Testimonial============= */}
     {/* ==========new letter============= */}
     <NewLetter/>
     {/* ==========new letter============= */}
    </>
}
