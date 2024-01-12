import { useState } from "react"
import FeaturedCard from "../shared/FeaturedCard"
import { useLocation } from "react-router-dom"
import CommonSection from "../shared/commonSection/CommonSection"
import { Container, Col, Row } from "reactstrap"

export default function SearchResultList() {
  const location = useLocation()
  const [data, setData] = useState(location.state)
  console.log(data)
  return (
    <>
      <CommonSection subtitle={"All Tour Search"} />

      <section>
        <Container>
          <Row>
            {
              data.map((item)=>(
                <Col lg='3' key={data._id}>
                  <FeaturedCard tour={item} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  )
}
