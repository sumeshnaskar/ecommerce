import React from 'react'

import { Carousel } from '../components'

export function CarouselContainer(){
    return (
        <Carousel> 
            {/* <Carousel.Image src={process.env.PUBLIC_URL + 'images/icon-close.svg'}/>  */}
            {/* background sneaker image*/}
            <Carousel.ImageWrapper 
                src={process.env.PUBLIC_URL + 'images/image-product-1.jpg'} 
                alt="sneaker product image-1"
            >     
                {/* left arrow */}
                <Carousel.ArrowButton><Carousel.Arrow transform = "rotate(135deg)"/></Carousel.ArrowButton>
                {/* right arrow */}
                <Carousel.ArrowButton><Carousel.Arrow transform = "rotate(-45deg)"/></Carousel.ArrowButton>
            </Carousel.ImageWrapper>         
        </Carousel>
    )
}
