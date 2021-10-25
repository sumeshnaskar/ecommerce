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
    display: inline-block;
    display: flex;
    padding-bottom: 1em;
    align-items: center;

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
            display: none;
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