import "../style/tourDetail.css"
import { useParams } from "react-router-dom"
import CalculateAvgRating from "../utils/CalculateAvgRating"
import { Container, Row, Col } from "reactstrap"
import { useState, useRef, useEffect } from "react"
import avatar from "../assets/images/avatar.jpg"
import Booking from "../components/booking/Booking"
import Newletter from "../shared/newletter/NewLetter"
import useFetch from "../hooks/useFetch"
import { BASE_URL } from "../utils/config"
export default function TourDetails() {
  const { id } = useParams()
  const { data: tour, loading, err } = useFetch(`${BASE_URL}/tour/${id}`)
  const { title, city, photo, price, reviews, maxGroupSize } = tour
  const [starCount, setStarCount] = useState(4)
  const [review, setReview] = useState("")


  const {avgRating} = CalculateAvgRating(reviews)
  
  return (
    <>
      <section>
        {
          (avgRating && reviews) ?
          <Container>
          <Row>
            <Col lg="8">
              <div className="detail_img">
                <img src={photo} alt="" />
              </div>

              <div className="detail_content">
                <h2 className="detail_title">{title}</h2>

                <div className="detail_content_top  ">
                  <span className="price">
                    <i class="ri-money-dollar-circle-line"></i> {price} cent/per
                  </span>
                  <span className=" avgRating d-flex align-items-center gap-1">
                   
                    <i class="ri-star-fill"></i> { avgRating ===''?"Not Rated":avgRating} {avgRating === ''?'':<span>({reviews.length})</span>}
                  </span>
                </div>

                <div className="detail_content_bottom">
                  <span className="location">
                    {" "}
                    <i class="ri-map-pin-line"></i> {city}
                  </span>
                  <span className="groupPeople">
                    {" "}
                    <i class="ri-group-line"></i> {maxGroupSize} People
                  </span>
                </div>

                <div className="detail_description">
                  <h2>Description</h2>
                  <p>This is description</p>
                </div>
              </div>

              <div className="show_reviews">
                <h1>Review ({reviews.length})</h1>
                <div className="star_review d-flex gap-2">
                  {[...Array(5).keys()].map((number) => (
                    <div
                      className={
                        number <= starCount ? "star_color" : "star_nonColor"
                      }
                      key={number}
                    >
                      <i
                        class="ri-star-fill"
                        onClick={() => setStarCount(number)}
                      ></i>
                    </div>
                  ))}
                </div>
                <div className="review_submit">
                  <input
                    type="text"
                    placeholder="Enter your thinking"
                    className="review_input"
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <button
                    className="btn_submit"
                    onClick={() => console.log(starCount + 1, review)}
                  >
                    Submit
                  </button>
                </div>

                <div className="user_review">
                  {reviews.map((item, index) => (
                    <div className="user_review_item " key={index}>
                      <div className="aboutUser d-flex align-items-center mt-5 gap-3">
                        <img src={avatar} alt="" />

                        <div className="m-100">
                          <h4>{item.name}</h4>
                          <p>
                            {new Date("1-8-2023").toLocaleDateString("en-GB")}
                          </p>
                        </div>

                        <span>
                          {item.rating} <i class="ri-star-fill"></i>{" "}
                        </span>
                      </div>
                      <div className="userCmt">
                        <h6>That is very amazing </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container> :  <Container>
          <Row>
            <Col lg="8">
              <div className="detail_img">
                <img src={photo} alt="" />
              </div>

              <div className="detail_content">
                <h2 className="detail_title">{title}</h2>

                <div className="detail_content_top  ">
                  <span className="price">
                    <i class="ri-money-dollar-circle-line"></i> {price} cent/per
                  </span>
                  <span className=" avgRating d-flex align-items-center gap-1">
                   
                    {/* <i class="ri-star-fill"></i> { avgRating ===''?"Not Rated":avgRating} {avgRating === ''?'':<span>({reviews.length})</span>} */}
                  </span>
                </div>

                <div className="detail_content_bottom">
                  <span className="location">
                    {" "}
                    <i class="ri-map-pin-line"></i> {city}
                  </span>
                  <span className="groupPeople">
                    {" "}
                    <i class="ri-group-line"></i> {maxGroupSize} People
                  </span>
                </div>

                <div className="detail_description">
                  <h2>Description</h2>
                  <p>This is description</p>
                </div>
              </div>

              <div className="show_reviews">
                {/* <h1>Review ({reviews.length})</h1> */}
                <div className="star_review d-flex gap-2">
                  {[...Array(5).keys()].map((number) => (
                    <div
                      className={
                        number <= starCount ? "star_color" : "star_nonColor"
                      }
                      key={number}
                    >
                      <i
                        class="ri-star-fill"
                        onClick={() => setStarCount(number)}
                      ></i>
                    </div>
                  ))}
                </div>
                <div className="review_submit">
                  <input
                    type="text"
                    placeholder="Enter your thinking"
                    className="review_input"
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <button
                    className="btn_submit"
                    onClick={() => console.log(starCount + 1, review)}
                  >
                    Submit
                  </button>
                </div>

                {/* <div className="user_review">
                  {reviews.map((item, index) => (
                    <div className="user_review_item " key={index}>
                      <div className="aboutUser d-flex align-items-center mt-5 gap-3">
                        <img src={avatar} alt="" />

                        <div className="m-100">
                          <h4>{item.name}</h4>
                          <p>
                            {new Date("1-8-2023").toLocaleDateString("en-GB")}
                          </p>
                        </div>

                        <span>
                          {item.rating} <i class="ri-star-fill"></i>{" "}
                        </span>
                      </div>
                      <div className="userCmt">
                        <h6>That is very amazing </h6>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </Col>

            {/* <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col> */}
          </Row>
        </Container>


        }
       
      </section>
      <Newletter />
    </>
  )
}
