import styled from "styled-components"

export const Container = styled.section`
    @media(min-width: 700px){
        width: 100%
        margin: 0 auto;
        
        border: 2px solid;
        display: flex;
        justify-content: center;
        height: 100vh;
        align-items: center;
        display: none;
    }
`

export const ImageWrapper = styled.div`
    background: url(${({src})=>src});
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50vh;
    @media(min-width: 700px){
        max-width: 400px;
        border-radius: 10px;
        height: 400px

    }
`

export const ArrowButton = styled.button`
    background-color: hsl(0, 0%, 100%);
    padding: 1.25em;
    border-radius: 100px;
    border: none;
    margin: .5em;

    @media(min-width: 700px){
        margin: -2em;
    }
    
`
 
export const Arrow = styled.i`
    border: solid black;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
    transform: ${({transform})=>transform};
    margin:  ${({transform}) => transform === 'rotate(135deg)' ? '4px 0px 0px 5px' : '4px 5px 0px 0px'};
`