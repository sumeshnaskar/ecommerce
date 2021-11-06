import React from 'react'
import { Container, Image, Group, Menu, Item, Cart, Text, Checkout, Bubble } from './styles/header'


// returns div
export default function Header({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

// returns img
Header.Image = function HeaderImage({ ...restProps }){
    return <Image {...restProps}/>
}

Header.Group = function HeaderGroup({ children, ...restProps }){
    return <Group {...restProps}>{children}</Group>
}

// returns ul
Header.Menu = function HeaderMenu({ children, ...restProps }){
    return <Menu {...restProps}>{children}</Menu>
}

// returns li
Header.Item = function HeaderItem({ children, ...restProps }){
    return <Item {...restProps}>{children}</Item>
}

Header.Cart = function HeaderCart({ children, ...restProps }){
    return <Cart {...restProps}>{children}</Cart>
}

Header.Text = function HeaderText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}

Header.Checkout = function HeaderCheckout({ children, ...restProps }){
    return <Checkout {...restProps}>{children}</Checkout>
}

Header.Bubble = function HeaderBubble({ children, ...restProps }){
    return <Bubble {...restProps}>{children}</Bubble>
}