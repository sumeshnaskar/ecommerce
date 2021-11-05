import React from 'react'

import { 
    Container, 
    ImageWrapper, 
    ArrowButton, 
    Arrow,
    Image
} from './styles/carousel'

export default function Carousel({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Carousel.ImageWrapper = function ImageImageWrapper({ children, ...restProps }){
    return <ImageWrapper {...restProps}>{children}</ImageWrapper>
}

Carousel.ArrowButton = function ImageArrowButton({ children, ...restProps }){
    return <ArrowButton {...restProps}>{children}</ArrowButton>
}

Carousel.Arrow = function ImageArrow({...restProps}){
    return <Arrow {...restProps}/>
}

Carousel.Image = function ImageImage({...restProps}){
    return <Image {...restProps}/>
}