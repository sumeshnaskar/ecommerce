import React from 'react'
import { HeaderContainer } from './containers/header'
import { ProductContainer } from './containers/product'
import { CarouselContainer } from './containers/carousel'

export default function App() {
  return (<>
    <HeaderContainer/>
    <CarouselContainer />
    <ProductContainer/></>
  )
}


