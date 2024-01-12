import React from 'react'
import { Container , Row , Col } from 'reactstrap'
import maleTourist from '../../assets/images/male-tourist.png'
import './newletter.css'
export default function NewLetter() {
  return <section className='newletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newletter_content">
                    <h2>subscribe now to get useful travling information </h2>
                    <div className="newletter_input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newletter_btn">Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium aliquid amet, modi sed quas repellendus
                         distinctio! Itaque, esse. Cumque enim neque quod, nihil soluta similique ut vero aliquid maiores sed.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newletter_img">
                <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}
