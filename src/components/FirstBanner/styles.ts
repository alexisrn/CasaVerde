import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-right: 30px;


`

export const Vector = styled.div`
position: absolute;
right: 0;
`

export const Content = styled.div`
width: 80%;
height: 100%;
z-index: 5;

display: flex;
align-items: center;
justify-content: center;
@media (max-width:400px){
    margin-right:80px;
    text-align: center;
}
`

export const CtnContent = styled.div`
height: 100%;
width: 45%;
color: #202020;
span{
    font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
opacity: 0.5;
}

h2{
font-family: "Elsie Swash Caps";
font-size: 82px;
font-style: normal;
font-weight: 900;
line-height: normal;
}
p{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 26px; /* 162.5% */
padding:12px 0;
}
@media(max-width:430px){
    h2{
        font-size: 55px;
    }
}

@media (max-width: 400px){
    width: 250px;
    text-align: center;
    margin-left: 100px;
    margin-top: 130px;

    span{
        font-size: 17px;
    }
    h2{
        font-size: 40px;
    }
    p{
        font-size: 12px;
        
    }
 }
    
`
export const CtnImage = styled.div`
height: 100%;
width: 55%;
width: 787px;
height: 883px;

img{
    height: 100%;
    width: 100%;
}
@media (max-width: 410px){
    display: none;
 }

 @media(max-width:430px){
    img{
        height: 90%;
        width: 125%;
        margin-top: 100px;
        padding:0 20px;
    }
    }
`