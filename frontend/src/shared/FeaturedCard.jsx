import React from "react"
import "./featuredCard.css"
import { Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"
import CalculateAvgRating from "../utils/CalculateAvgRating"

export default function FeaturedCard({ tour }) {
  const { _id, title, city, photo, price, reviews } = tour
  const { avgRating } = CalculateAvgRating(reviews)
  return (
    <div className="tour_card">
      <Card>
        <div className="tour_img">
          <img src={photo} alt="" />
          <span>Featured</span>
        </div>

        <CardBody>
          <div className="card_top d-flex align-items-center justify-content-between ">
            <span className="tour_location d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {city}
            </span>
            <span className="tour_rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i>{" "}
              {avgRating === "" ? "Not Rated" : avgRating}{" "}
              {avgRating === "" ? "" : <span>({reviews.length})</span>}
            </span>
          </div>
          <h5 className="tour_title">
            <Link to={`/tourdetails/${_id}`}>{title}</Link>
          </h5>
          <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
            <h5>
              ${price}
              <span>per/person</span>
            </h5>
            <button className="btn booking_btn">
              <Link to={`/tourdetails/${_id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
