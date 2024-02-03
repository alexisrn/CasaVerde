import styled from 'styled-components';

export const Container = styled.form`
width: 585px;
height: 75px;
background-color: #FFF;
box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.06);

display: flex;
align-items: center;
`

export const Icon = styled.div`
width: 10%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;
span{
    width: 30px;
}
`
export const Input = styled.input`
width: 100%;
height: 100%;
border: none;
outline: none;
font-size: 20px;
color: #202020;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
opacity: 0.3;
`

export const Btn = styled.button`
background-color: ${({ disabled }) => (disabled ? '#ccc' : '#ffcb47')};
color: #fff;
width: 45%;
height: 100%;
border: none;
font-size: 16px;
cursor:  ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

`