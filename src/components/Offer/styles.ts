import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
margin:80px 0;
display: flex;
align-items: center;
flex-direction: column;



span{
    opacity: 0.5;
    font-size: 22px;
    font-weight: 400;
    line-height: 26.82px;
    text-align: center;
}

h2{
    font-family: 'Elsie Swash Caps';
    font-weight: 800;
    font-size: 82px;
}
`

export const CtnBtn = styled.div`

width: 100%;
height: 100%;

display: flex;
justify-content: center;
align-items: center;
`

export const CtnCard = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap:40px;

`