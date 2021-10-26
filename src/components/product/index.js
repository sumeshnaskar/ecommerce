import React from 'react'
import { 
    Container, 
    LargeText, 
    SmallText,
    Group,
    Quantity,
    QuantityButton,
    CartButton,
    LargeImage,
    SmallImage,
    Inner 
} from './styles/product'

export default function Product({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Product.LargeImage = function ProductLargeImage({...restProps}){
    return <LargeImage {...restProps}/>
}

Product.SmallImage = function ProductSmallImage({...restProps}){
    return <SmallImage {...restProps}/>
}

Product.LargeText = function ProductLargeText({ children, ...restProps }){
    return <LargeText {...restProps}>{children}</LargeText>
}

Product.SmallText = function ProductSmallText({ children, ...restProps }){
    return <SmallText {...restProps}>{children}</SmallText>
}

Product.Group = function ProductGroup({ children, ...restProps }){
    return <Group {...restProps}>{children}</Group>
}

Product.Inner = function ProductInner({ children, ...restProps }){
    return <Inner {...restProps}>{children}</Inner>
}

Product.Quantity = function ProductQuantity({ children, ...restProps }){
    return <Quantity {...restProps}>{children}</Quantity>
}

Product.QuantityButton = function ProductQuantityButton({ children, ...restProps }){
    return <QuantityButton {...restProps}>{children}</QuantityButton>
}

Product.CartButton = function ProductCartButton({ children, ...restProps }){
    return <CartButton {...restProps}>{children}</CartButton>
}


