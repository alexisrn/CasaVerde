import styled from 'styled-components';

export const Container = styled.footer`
width: 100%;
height: 100%;
background-color: #FFCE50;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #FFFFFF;
padding:30px;

`

export const TextDev = styled.p`
margin-top: 10px;
font-size: 14px;
`

export const TextCopy = styled.p`
margin-top: 5px;
font-weight: 600;

`

export const CtnMidias = styled.ul`
display: flex;
gap:10px;
transform: translate(-0%, -0%);
`
export const CircleMidia = styled.li`
cursor: pointer;
background-color: #FFFFFF;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
color: #FFC42E;
display: flex;
justify-content: center;
align-items: center;
font-size: 0px;

a{
  list-style: none;
  width: 100%;
  height: 100%;
  border-radius:50%;
  color: #FFC42E;
  display: flex;
  justify-content: center;
  align-items: center;
}

position: relative; 
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 63px;
  border-radius: 50%;
  font-size: 25px;
 
  transition: .5s;

  &:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #FFFFFF;
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}

&:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #FFFFFF;
}

a:hover {
  color: #ffee10;
  box-shadow: 0 0 5px white;
}
`