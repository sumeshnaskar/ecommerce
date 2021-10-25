import React from 'react'

import { Product } from '../components'

export function ProductContainer(){
    return (
        <Product> 
            <Product.SmallText orange = "true">Sneaker Company</Product.SmallText>
            <Product.LargeText>Fall Limited Edition Sneakers</Product.LargeText>
            <Product.SmallText>
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </Product.SmallText>
            <Product.Group>
                <Product.Group>
                    <Product.LargeText> $125.00</Product.LargeText>
                    <Product.SmallText orange="true" discount="true">50%</Product.SmallText>
                </Product.Group>
                <Product.SmallText linethrough="true">$250.00</Product.SmallText>    
            </Product.Group>            
        </Product>
    )
}



