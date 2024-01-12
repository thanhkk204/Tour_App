import React from 'react'
import FeaturedCard from '../../shared/FeaturedCard'
import { Col } from 'reactstrap'
import { BASE_URL } from '../../utils/config.js'
import useFetch from '../../hooks/useFetch.js'

export default function FeaturedList() {
    const {data ,loading , err} = useFetch(`${BASE_URL}/tour/search/getAllByFeatured`)
  return <>
  {loading && <h1>.....Loading</h1>}
  {err && <h1>{err}</h1>}
        { !loading && !err &&
            data.map((item , index)=>(
                <Col key={index} lg='3'>
                    <FeaturedCard tour={item} />
                </Col>
            ))
        }
  </>
}
