import React, {useState} from 'react'
import { Header, Product } from '../components'

const styles  = { marginRight: ".5em"}

//header container
export function HeaderContainer({ count, setCount }){
    const [ displayMenu, setDisplayMenu ] = useState(false)
    return (
        <>
        <Header>
            <Header.Group>
                {/* Hamburger menu for small screen */}
                <Header.Image 
                    src = {process.env.PUBLIC_URL + 'images/icon-menu.svg'} 
                    alt="open menu"
                    style ={styles}
                    onClick = {() => setDisplayMenu(!displayMenu)}/>
                {/* sneakers logo */}
                <Header.Image 
                    src = {process.env.PUBLIC_URL + 'images/logo.svg'} 
                    alt="sneakers logo"/>
            </Header.Group>  
            {/* menu items */}
            <Header.Menu display = { displayMenu ? 'block' : 'none'}>
                <Header.Image 
                    src = {process.env.PUBLIC_URL + 'images/icon-close.svg'} 
                    alt="close menu"
                    onClick = {() => setDisplayMenu(!displayMenu)}/>
                <Header.Item>Collections</Header.Item>
                <Header.Item>Men</Header.Item>
                <Header.Item>Women</Header.Item>
                <Header.Item>About</Header.Item>
                <Header.Item>Contact</Header.Item>
            </Header.Menu>   
            <Header.Group>
                {/* cart image  */}
                <Header.Image 
                    src = {process.env.PUBLIC_URL + 'images/icon-cart.svg'} 
                    alt="cart icon"
                    style = {styles}/>
                {/* profile image */}
                <Header.Image 
                    src = {process.env.PUBLIC_URL + 'images/image-avatar.png'} 
                    alt='profile image'
                    />
            </Header.Group>
        </Header>
        <Header.Cart>
            <Header.Item>Cart</Header.Item>
            {count === 0 && <Header.Item>Your cart is empty.</Header.Item>}
            {count > 0 && <><Header.Group cart = 'true' direction = 'row'>
                <Header.Image src={process.env.PUBLIC_URL + '/images/image-product-1-thumbnail.jpg'}/>
                <Header.Group direction = 'column'>
                    <Header.Text>Fall Limited Edition Sneakers</Header.Text>
                    <Header.Text>$125.00 x {count} = <strong>${count * 125}.00</strong></Header.Text>
                </Header.Group>
                <Header.Image 
                    src = {process.env.PUBLIC_URL + 'images/icon-delete.svg'} 
                    alt='delete icon'
                    onClick = {() => setCount(0)}
                />
            </Header.Group>
            <Header.Checkout>Checkout</Header.Checkout></>}
        </Header.Cart>
        </>
    )
}
