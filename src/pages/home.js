import React, {useState} from 'react'

import { BannerContainer } from "../containers/banner";
import { HeaderContainer } from "../containers/header";
import { ProductContainer } from "../containers/product";

export default function Home(){
    const [addtoCart, setAddtoCart] = useState(0)

    return(
        <>
            <HeaderContainer 
                addtoCart = {addtoCart} 
                setAddtoCart={setAddtoCart}
            />
            <BannerContainer/>
            <ProductContainer 
                setAddtoCart = {setAddtoCart}
            />
        </>
    )
}