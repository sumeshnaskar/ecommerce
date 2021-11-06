import React, {useState} from 'react'

import { Carousel, Product } from '../components'

const smallImages = [
    'image-product-1-thumbnail',
    'image-product-2-thumbnail',
    'image-product-3-thumbnail',
    'image-product-4-thumbnail'
]

export function CarouselContainer({ display, setDisplay, selectImage, setSelectImage }){

    return (
        <Carousel display = {display}> 
            <Carousel.ImageWrapper style = {{ height: 'auto'}}>
                <Carousel.Image 
                    src={process.env.PUBLIC_URL + '/images/icon-close.svg'}
                    onClick = { () => setDisplay(0)}
                /> 
                {/* background sneaker image*/}
            </Carousel.ImageWrapper>
            <Carousel.ImageWrapper 
                src={process.env.PUBLIC_URL + `/images/image-product-${selectImage}.jpg`} 
                alt= {`sneaker product image-${selectImage}`}
            >     
            {/* left arrow */}
            <Carousel.ArrowButton 
                onClick = {() => selectImage > 1 && setSelectImage(selectImage - 1)}
            >
                <Carousel.Arrow transform = "rotate(135deg)"/>
            </Carousel.ArrowButton>
            {/* right arrow */}
            <Carousel.ArrowButton 
                onClick = {() => selectImage < smallImages.length && setSelectImage(selectImage + 1)}
            >
                <Carousel.Arrow transform = "rotate(-45deg)"/>
            </Carousel.ArrowButton>
            </Carousel.ImageWrapper>
            <Product.Group direction ='row' width = '400px'>
                {smallImages.map( (image, index) => (

                    <Product.SmallImage 
                    key = {`small-image-${index}`}
                    src={process.env.PUBLIC_URL + `/images/${image}.jpg`}
                    alt = {`thumbnail-image-${index}`}
                    onClick = {() => setSelectImage(index + 1)}
                    selected = {(index+1) === selectImage && true}/>

                ))}
            </Product.Group> 
            
        </Carousel>
    )
}
