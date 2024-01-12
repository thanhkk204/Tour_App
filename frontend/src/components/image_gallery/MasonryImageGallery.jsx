import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import imageGallery from './imageGallery'
export default function MasonryImageGallery() {
  return (
    <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 768: 3, 992: 4}}
            >
                <Masonry gutter='1rem'>
                    {
                        imageGallery.map((item , index)=>(
                            <img src={item} key={index} alt="" style={{width:'100%',display:'block',borderRadius:'10px'}} className='masonry_img'/>
                        ))
                    }
                </Masonry>
            </ResponsiveMasonry>
  )
}
