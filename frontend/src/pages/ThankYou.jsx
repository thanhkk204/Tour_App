import React from 'react'
import { Container , Row , Col } from 'reactstrap'
import '../style/thankyou.css'
export default function ThankYou() {
  return <Container>
    <Row>
        <Col lg='12'>
            <div className="thank_you d-flex align-items-center">
            
            <h1 className='title'><i class="ri-check-line"></i>Thank You</h1>
            <p>Your tour is booked</p>
            </div>
        </Col>
    </Row>
  </Container>
}
