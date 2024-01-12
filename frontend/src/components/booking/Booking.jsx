import {useState} from 'react'
import './booking.css'
import { Form , FormGroup , ListGroup , ListGroupItem} from 'reactstrap'
import { useNavigate } from "react-router-dom";
export default function Booking({tour , avgRating}) {
    const {price , reviews} = tour
    const [credentials , setCredentials] = useState({
        userId: '01',
        userEmail: ' example@gmail.com',
        fullName: '',
        phone: '',
        groupSize: 1,
        bookAt:''
    })
    const navigate = useNavigate();
    // take value from input
    const handleChange = e =>{
        setCredentials(pre=>({...pre , [e.target.id]: e.target.value}))
    }
    // submit to sever
    const handleSubmit = (event)=>{
        navigate("/thank_you");
       
    }
  return <div className="booking">
            <div className="booking_header d-flex">
                <h1>${price} <span>cent/per</span></h1>
            <span className=" avgRating d-flex align-items-center gap-1">
                <i class="ri-star-fill"></i> {avgRating ===''?"Not Rated":avgRating} {avgRating === ''?'':<span>({reviews.length})</span>}
                </span>
            </div>

            <div className="booking_form">
                <h5>Information</h5>
                <Form className='booking_infor_form'>
                        <FormGroup>
                            <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <input type="text" placeholder='Phone' id='phone' required onChange={handleChange} />
                        </FormGroup>
                        <FormGroup className='d-flex align-items-center gap-3'>
                            <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                            <input type="number" placeholder='Max people' id='groupSize' required onChange={handleChange} />
                        </FormGroup>
                </Form>
            </div>

            <div className="booking_footer">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                            <h5>{price}  <i class="ri-close-line"></i> Per</h5>
                            <span>{price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                            <h5>Service Charge</h5>
                            <span>$10</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                            <h5>Total</h5>
                            <span>$109</span>
                    </ListGroupItem>
                </ListGroup>
            </div>

            <button onClick={handleSubmit} className='primary__btn w-100 mt-4 ' style={{fontWeight:600,color:'#fff'}}>Book now</button>

  </div>
}
