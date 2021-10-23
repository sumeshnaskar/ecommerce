import React from 'react'
import { Container, Image, Group, Menu, Item } from './styles/header'

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
