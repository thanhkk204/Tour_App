import { useRef , useEffect} from 'react'
import {Container , Row , Button} from 'reactstrap'
import {NavLink , Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
 const nav_links=[
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    }
 ]
export default function Header() {
    const headerRef = useRef(null)
    function getLocation(){
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.add('sticky_header')
            }
        })
    }
    useEffect(()=>{
        getLocation()
        return( window.removeEventListener('scroll' , getLocation))

    },[])

  return <header className="header_leading" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav_wrapper d-flex align-items-center justify-content-between ">
                    {/* =========logo======== */}
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    {/* =========end logo======== */}
                    {/* ==========navigation======== */}
                    <div className="navigation">
                        <ul className="menu d-flex align-items-center gap-5">
                            {
                                nav_links.map((items , index)=>(
                                    <li className='nav_item' key={index}>
                                        <NavLink to={items.path} className={navClass => navClass.isActive ? "active_link":""} >{items.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* ===========end navigation======== */}
                    {/* ===========menu end======== */}
                    <div className="nav_right d-flex align-items-center gap-4">
                        <div className="nav_btns d-flex align-items-center gap-4">
                            <Button className='btn secondary__btn'>
                                <Link to='/login'>Login</Link>
                            </Button>
                            <Button className='btn primary__btn'>
                                <Link to='/register'>Register</Link>
                            </Button>
                        </div>
                        <span className="mobile_menu">
                        <i class="ri-menu-line"></i>
                        </span>
                    </div>
                    {/* ===========end menu end======== */}
                </div>
            </Row>
        </Container>
        </header>
}
