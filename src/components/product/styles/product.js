import styled from "styled-components"

export const Container = styled.section`
    width: 90%;
    margin: 0 auto;

    @media(min-width: 700px){
       display: flex;
       justify-content: space-between;
       margin: 4em;
    }
`

export const Inner = styled.div`
    @media(min-width: 700px){   
        width: ${({direction})=> direction ? '100%' : '50%'};
        display: ${({direction})=> direction};
    }

    
`

export const LargeImage = styled.img`
    display: none;


    @media(min-width: 700px){
        display: block;
        width: 400px;
        height: 400px;
        object-fit: contain;
        border-radius: 10px;
        cursor: pointer;
    }
`

export const ImageWrapper = styled.div`

`

export const SmallImage = styled.div`

    display: none;


    @media(min-width: 700px){
        display: block;
        width: 80px;
        height: 80px;
        object-fit: scale-down;
        border-radius: 10px;
        margin-top: 1em;
        cursor: pointer;
        border: ${({selected}) => selected && '2px solid hsl(26, 100%, 55%)'};
        background-blend-mode: screen;
        background-image: url(${({src})=>src});
        background-color: ${({selected}) => selected && 'hsl(0, 0%, 70%)'};
        background-size: cover;

        &:hover{
            background-color: hsl(0, 0%, 70%);
            border: 2px solid hsl(26, 100%, 55%);
        }
        
    }
`

export const LargeText =styled.h2`
    color: hsl(220, 13%, 13%);
    font-size: 1.75rem;
    margin: 0;
    margin-right: .5em;

    @media(min-width:700px){
        font-size: 2.8rem;
    }
`
export const SmallText =styled.p`
    font-size: 1rem;
    color: ${({orange}) => orange ? 'hsl(26, 100%, 55%)' : 'hsl(219, 9%, 45%)'};
    font-weight: ${({orange}) => orange ? '700' : '400'};
    background-color: ${({discount}) => discount && 'hsl(25, 100%, 94%)'};
    padding: ${({discount}) => discount && '.25em'};
    border-radius: ${({discount}) => discount && '5px'};
    text-decoration: ${({linethrough}) => linethrough && 'line-through'};

`

export const Group = styled.div`  
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${({width})=>width};
    height: ${({height})=>height};
    @media(min-width: 700px){
        flex-direction: ${({direction})=> direction ? direction : 'row'};
        align-items: ${({placement})=> placement};
    }
`

export const Quantity = styled.div`
    display: flex;
    justify-content: space-between;
    background: hsl(223, 64%, 98%);
    padding: .25em 1em;
    border-radius: 10px;
    font-weight: 700;
    margin-bottom: 1em;

    @media(min-width: 700px){
        margin-bottom: 0;
        width: 30%;
        margin-right: 2em;
    }
    
`
export const QuantityButton = styled.button`
    font-size: 2rem;
    border: none;
    background: transparent;
    color: hsl(26, 100%, 55%);
    font-weight: 700;
    cursor: pointer;
    
`

export const CartButton = styled(Quantity)`
    justify-content: center;
    background-color: hsl(26, 100%, 55%);
    color: #fff;
    box-shadow: 0px 30px 40px 1px hsl(25, 100%, 94%);
    margin-bottom: 5em;
    cursor: pointer;
    align-items: center;
    
    @media(min-width: 700px){
        margin: 0;
        width: 100%;
        
    }
`
