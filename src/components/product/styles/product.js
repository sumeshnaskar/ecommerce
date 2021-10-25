import styled from "styled-components"

export const Container = styled.section`
    width: 90%;
    margin: 0 auto;
`

export const Image = styled.img`
    width: 100%;
    object-fit: scale-down;
`

export const LargeText =styled.h2`
    color: hsl(220, 13%, 13%);
    font-size: 1.75rem;
    margin: 0;
    margin-right: .5em;
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
`
