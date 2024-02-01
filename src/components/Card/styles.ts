import styled from 'styled-components';


export const Container = styled.div`
width: 379px;
height: 200px;
background-color: white;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

display: flex;
`

export const Image = styled.div`
width: 50%;
height: 100%;

img{
    height: 100%;
}
`


export const CtnContent = styled.div`

width: 50%;
padding:20px 10px;

h2{
    font-size:32px;
}

div{
    display: flex;
    flex-direction: column;
}
`

export const Price = styled.p`
font-size: 16px;
line-height: 19.5px;
opacity: 0.5;
padding:10px 0;
`

export const Buy = styled.div`
cursor: pointer;
padding:10px 0;
color:#FFCB47;
font-weight: 400;
`