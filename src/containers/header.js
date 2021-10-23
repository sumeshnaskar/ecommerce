import React, {useState} from 'react'
import { Header } from '../components'

const styles  = { marginRight: ".5em"}

//header container
export function HeaderContainer(){
    const [ displayMenu, setDisplayMenu ] = useState(false)
    return (
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
    )
}
