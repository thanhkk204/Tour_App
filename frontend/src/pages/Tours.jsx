import { React, useState, useEffect } from "react"
import { Container, Row, Col } from "reactstrap"
import CommonSection from "../shared/commonSection/CommonSection"
import SearchBar from "../shared/SearchBar"
import FeaturedCard from "../shared/FeaturedCard"
import TourData from "../assets/data/tours.js"
import "../style/tours.css"
import NewLetter from "../shared/newletter/NewLetter"
import useFetch from "../hooks/useFetch"
import { BASE_URL } from "../utils/config"

export default function Tours() {
  
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  const { data: tours , loading , err } = useFetch(
    `${BASE_URL}/tour/search/getAllForPanagation?page=${page}`
  )
  const { data: size } = useFetch(`${BASE_URL}/tour/search/getCountTours`)
  console.log(loading , err)
  useEffect(() => {
    const pages = Math.ceil(size / 8)
    setPageCount(pages)
  }, [page, size])

  return (<>
   
      
    <CommonSection subtitle={"All Tour"} />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SearchBar />
            </Col>
            {loading && <h1>...Loading</h1>}
    {err && <h1>Something was wrong</h1>}
    { !loading && !err && <>
            {tours.map((item) => (
              <Col key={item._id} lg="3">
                <FeaturedCard tour={item} />
              </Col>
            ))}
            </>
}
            <Col lg="12">
              <div className="pagination d-flex justify-content-center align-items-center my-5 gap-4">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => { setPage(number) }}
                    className={page === number ? "active_page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <NewLetter />
    
    </>

  )
}
