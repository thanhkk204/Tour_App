import {useState} from 'react'
import '../style/login.css'
import { Container , Row , Col , Form ,FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

export default function Login() {
  const [toggle , setToggle] = useState(false)
  const [credentials , setCredentials] = useState({
    fullName: '',
    password: ''
})
const handleChange = e =>{
  setCredentials(pre=>({...pre , [e.target.id]: e.target.value}))
}
const handleSubmit = e=>{
  e.preventDefault()
  console.log(credentials)
}
  return <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className="login_container">
            <div className="login_img">
            <img src={loginImg} alt="" />
            </div>
            <div className="input_form">
            <Form className='login_form'>
              <div className="input_img">

              <img src={userIcon} alt="" />
              </div>
              
              <FormGroup className='input_name'>
                  <input type="text" id='fullName' required placeholder='Full Name' onChange={handleChange} />
              </FormGroup>
              <FormGroup className='input_password'>
                  <input type={toggle?'text':'password'} id='password' required placeholder='Password' onChange={handleChange}/>
                  <span onClick={()=>setToggle(!toggle)}>
                  {toggle? <i class="ri-eye-fill"></i>: <i class="ri-eye-close-fill"></i>}
                  </span>
                  
              </FormGroup>
              <p>Bạn chưa có tài khoản?<Link to={'/register'}>Đăng kí</Link></p>
              <button className='input_btn' onClick={handleSubmit}>Đăng nhập</button>
            </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}
