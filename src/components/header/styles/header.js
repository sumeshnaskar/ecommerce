import styled, {keyframes} from "styled-components"

export const Container = styled.div`
    width: 95%;
    min-width: 260px;
    margin: 0 auto;
    padding: 1em 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(min-width: 700px){
        border-bottom: 1px solid hsl(0,0%,75%);
        
    }
`

export const Image = styled.img`
    cursor: pointer;


`

export const Group = styled.div`
    position: relative;
    display: inline-block;
    display: flex;
    padding-bottom: ${({direction}) => direction ? '0' : '1em'};
    flex-direction: ${({direction}) => direction ? direction  : 'row'};
    align-items: center;
    justify-content: center;
    margin-top: ${({cart}) => cart && '1.5em'};

    &:last-of-type > ${Image}:nth-child(2){
        width: 25px;
        height: 25px;

        &:hover{
            border-radius: 25px;
            border: 3px solid hsl(26, 100%, 55%);
        }
    }

    @media(min-width: 700px){
        &:first-of-type > ${Image}:nth-child(1){
            display: ${({cart}) => cart ? 'block' : 'none'};
        }

        &:last-of-type > ${Image}:nth-child(2){
            width: 50px;
            height: 50px;
        }
    }
    
`
const slide = keyframes`
    100%{ left: 0; }
`
export const Menu = styled.ul`
    position: absolute;
    top: 0;
    left: -70%;
    margin: 0;
    padding: 1.5em;
    width: 70%;
    height: 100vh;
    background-color: hsl(0, 0%, 100%);
    z-index: 999;
    animation: ${slide} .3s forwards;
    display: ${({display})=>display};

    @media(min-width: 700px){
        display: flex;
        position: static;
        height: auto;
        padding: 0;
        width: 100%;
        justify-content: flex-start;
        align-items: flex-end;

        >${Image}{
            display: none;
        }
    }

`

export const Item = styled.li`
    list-style-type: none;
    font-weight: 700;
    font-size: 1rem;
    margin: 1em 0;
    cursor: pointer;
    color: hsl(219, 9%, 45%);
    
    &:first-of-type{
        margin-top: 2.5em;
    }

    &:hover{
        color: hsl(220, 13%, 13%);    
        
    }

    @media(min-width: 700px){
        margin: 0 1em;
        color: hsl(0, 0%, 75%);
        text-align: bottom;
        font-weight: 400;
        font-size: 1rem;
        margin-top: 1em;
        padding-bottom: 1.75em;
        border-bottom: 3px solid hsl(0, 0%, 100%);
        &:first-of-type{
            margin-top: 1em;
            margin-left: 3em;
        }

        &:hover{
            color: hsl(220, 13%, 13%);    
            border-bottom: 3px solid hsl(26, 100%, 55%);
        }
    }
    

`

export const Cart = styled.div`
    position: absolute;
    background: #fff;
    top: 4.5em;
    left: 0;
    right: 0;
    width: 96%;
    height: 240px;
    border-radius: 10px;
    margin: 0 auto;
    z-index: 999;
    box-shadow: 0px 8px 20px hsl(0,0%,75%);
    display: flex;
    flex-direction: column;
    user-select: none;

    > ${Item}: first-of-type{
        font-weight: 700;
        margin: 0;
        padding: 1em;
        font-size: 1.25rem;
        color: hsl(0,0%,0%);
        border-bottom: 1px solid hsl(0,0%,75%);
        cursor: auto;
        
    }

    > ${Item}: nth-child(2){
        margin: auto;
        vartical-align: center;
        border-bottom: none;
        color: hsl(219, 9%, 45%);

        &:hover{
            cursor: auto;
        }
    } 

    ${Image}:first-of-type{
        width: 50px;
        height: 50px;
        border-radius: 5px;
        border: none;
        cursor: auto;

        @media(min-width: 700px){
            display: block;
        }
    }


    @media(min-width: 700px){
        width: 320px;
        right: 2em;
        left: auto;
        margin: 0;
    }
`

export const Text = styled.p`
    margin: 0;
    align-self: flex-start;
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-bottom: 0;
    margin-right: 2.125em;
    margin-left: .5em;

    @media(min-width: 700px){
        margin-right: 1em;
    }
`

export const Checkout = styled.button`
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
    border: none;
    background-color: hsl(26, 100%, 55%);
    padding: 1em;
    font-weight: 700;
    color: hsl(0,0%,100%);
    font-size: 1rem;
    margin-top: 1em;
`

export const Bubble = styled.p`
    background-color: hsl(26, 100%, 55%);
    color: #fff;
    padding: 0.25em .75em;
    font-size: .5rem;
    border-radius: 25px;
    position: absolute;
    right: 3.5em;
    top: -1.5em;

    @media(min-width: 700px){
        right: 6.5em;
        top: 0;
    }
    
`