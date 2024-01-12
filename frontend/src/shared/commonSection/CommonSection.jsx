import React from 'react'
import {Container , Row , Col} from 'reactstrap'
import './commonSection.css'

export default function CommonSection({subtitle}) {
  return <section className='commonSection'>
    <Container>
        <Row>
            <Col lg='12 '>
                <h1>{subtitle}</h1>
            </Col>
        </Row>
    </Container>
  </section>
}
