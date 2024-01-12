import { React, useRef } from "react"
import "./search-bar.css"
import { Col, Form, FormGroup } from "reactstrap"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/config"
export default function SearchBar() {
  const locationRef = useRef("")
  const distanceRef = useRef(0)
  const maxPeopleRef = useRef(0)
  const navigate = useNavigate()

  async function handelSubmit() {
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const maxpeople = maxPeopleRef.current.value

    if (location === "" || distance === "" || maxpeople === "") {
      return alert("All field be required full")
    }
    const data = await fetch(
      `${BASE_URL}/tour/search/getAllbySearch?city=${location}&distance=${distance}&maxGroupSize=${maxpeople}`
    )
    if (!data.ok) {
      alert("Can not find any tour like that")
    }
    const result = await data.json()
    if (result.data.length == 0) {
      alert("Can not find any tour")
    } else {
      navigate(
        `/searchresultlist?city=${location}&distance=${distance}&maxGroupSize=${maxpeople}`,
        { state: result.data }
      )
    }
  }
  return (
    <Col lg="12">
      <div className="search_bar">
        <Form className="d-flex align-items-center gap-4 ">
          <FormGroup className="d-flex gap-3 align-items-center form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 align-items-center form__group form__group-fast">
            <span>
              <i class="ri-pin-distance-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 align-items-center form__group form__group-fast">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Max people</h6>
              <input type="number" placeholder="0" ref={maxPeopleRef} />
            </div>
          </FormGroup>

          <span className="search_icon" type="submit">
            <i class="ri-search-2-line" onClick={handelSubmit}></i>
          </span>
        </Form>
      </div>
    </Col>
  )
}
