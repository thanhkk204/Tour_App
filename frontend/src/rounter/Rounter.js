import React from 'react'
import {Routes , Route  , Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import ThankYou from '../pages/ThankYou'
export default function Rounter() {
  return <>
        <Routes>
            <Route path='/' element={ <Navigate to='/home' />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/searchresultlist' element={<SearchResultList/>} />
            <Route path='/tours' element={<Tours/>} />
            <Route path='/tourdetails/:id' element={<TourDetails/>} />
            <Route path='/thank_you' element={<ThankYou/>} />
        </Routes>
  </>
}
