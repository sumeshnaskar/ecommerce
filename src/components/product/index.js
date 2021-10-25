import React from 'react'
import { 
    Container, 
    Image, 
    LargeText, 
    SmallText,
    Group 
} from './styles/product'

export default function Product({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Product.Image = function ProductImage({...restProps}){
    return <Image {...restProps}/>
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
