import React, { useState } from 'react'

import { Header, Product } from '../components'
import { CarouselContainer } from './carousel'

const smallImages = [
    'image-product-1-thumbnail',
    'image-product-2-thumbnail',
    'image-product-3-thumbnail',
    'image-product-4-thumbnail'
]

export function ProductContainer({ setAddtoCart }){
    const [selectImage, setSelectImage] = useState(1)
    const [display, setDisplay] = useState(0)
    const [count, setCount] = useState(0)

    return (
        <Product>
            <CarouselContainer 
                display = {display} 
                setDisplay = {setDisplay} 
                selectImage = {selectImage} 
                setSelectImage = {setSelectImage}
            />
            <Product.Inner >
                <Product.Group direction = 'column'>
                    <Product.LargeImage 
                        src={process.env.PUBLIC_URL + `/images/image-product-${selectImage}.jpg`}
                        onClick = {() => setDisplay(1)}
                    />
                    <Product.Group direction ='row' width = '400px' >
                    {smallImages.map( (image, index) => (

                        <Product.SmallImage 
                        key = {`small-image-${index}`}
                        src={process.env.PUBLIC_URL + `/images/${image}.jpg`}
                        alt = {`thumbnail-image-${index}`}
                        onClick = {() => setSelectImage(index + 1)}
                        selected = {(index+1) === selectImage && true}/>

                    ))}
                    </Product.Group>
                </Product.Group>
                
            </Product.Inner>
            <Product.Inner>
            
                {/* company name  */}
                <Product.SmallText orange = "true">Sneaker Company</Product.SmallText>
                {/* title */}
                <Product.LargeText>Fall Limited Edition Sneakers</Product.LargeText>
                {/* description */}
                <Product.SmallText>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </Product.SmallText>
                <Product.Group direction = 'column' placement = 'flex-start'>
                    <Product.Group>
                        {/* price */}
                        <Product.LargeText> $125.00</Product.LargeText>
                        {/* discount */}
                        <Product.SmallText orange="true" discount="true">50%</Product.SmallText>
                    </Product.Group>
                    {/* old price */}
                    <Product.SmallText linethrough="true">$250.00</Product.SmallText>    
                </Product.Group> 
                <Product.Inner direction="flex">
                    <Product.Quantity>
                        <Product.QuantityButton onClick = {()=> count > 0 && setCount(count - 1)}>-</Product.QuantityButton>
                        <Product.SmallText style={{fontWeight: '700'}}>{count}</Product.SmallText>
                        <Product.QuantityButton onClick = {()=> setCount(count + 1)}>+</Product.QuantityButton>
                    </Product.Quantity>
                    <Product.CartButton onClick = {() => setAddtoCart(count)}>
                        {/* cart image  */}
                        <Header.Image 
                            src = {process.env.PUBLIC_URL + '/images/icon-cart.svg'} 
                            alt="cart icon"
                            style = {{width: '25px', height: '25px', filter: 'brightness(0) invert(1)'}}
                        />
                        <Product.SmallText style={{fontWeight: '700', color: '#fff', marginLeft: '1em'}}>Add to cart</Product.SmallText>
                    </Product.CartButton>
                </Product.Inner>
            </Product.Inner>
        </Product>
    )
}



