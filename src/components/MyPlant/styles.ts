import styled from 'styled-components';

export const Container = styled.div`
height: 440px;
width: 75%;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
z-index: 9;
display: flex;
@media (max-width:400px){
    margin-top: 50px;
}
`

export const CtnImg = styled.div`
background-color: red;

width: 60%;
height: 100%;

img{
    width: 100%;
    height: 100%;
}

@media (max-width: 500px){
width: 45%;

}

`

export const CtnContent = styled.div`
width: 40%;
height: 100%;
padding:20px 30px;


span{
font-size: 22px;
line-height: 26.82px;
color: #202020;
opacity: 0.5;
}

h2{
    font-size: 42px;
    font-family: "Elsie Swash Caps";
}

@media (max-width: 810px){
    width: 65%;
    padding:10px 20px;


    span{
font-size: 18px;

}
    h2{
        font-size: 35px;
    }
}
`

export const CtnList = styled.div`
padding: 20px 0;
@media (max-width: 400px){
    padding:0px 0;
}
`



export const ItemList = styled.div`
display: flex;
align-items: center;

font-size: 22px;
padding:15px 0;
span{
    opacity: 0.5;
    margin-left: 20px;
}

@media (max-width:400px){
    span{
        font-size: 15px;
    }
}
`

export const Ball = styled.div`
width: 52px;
height: 52px;
background-color:#FFCB47;
border-radius: 100%;
@media (max-width:400px){
    width: 30px;
    height: 30px;
}
`