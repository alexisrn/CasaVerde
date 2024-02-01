import styled from 'styled-components';

interface HeaderProps {
    scrollPosition: any;
  }


  export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80%;
height: 100%;
`

export const Container = styled.header<HeaderProps>`
    width:105%;
    box-shadow: ${({scrollPosition}) => 
    scrollPosition > 100 ? 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;' : ''
    };
    position: fixed;
    padding:10px 0;
    z-index: 10;
    height: ${({ scrollPosition }) =>
    scrollPosition > 100 ? '70px; ' : '70px'};
    background-color: ${({scrollPosition }) =>
    scrollPosition > 100 ? '#FFF' : 'transparent' };
transition: background-color 0.5s ease, position 0.5s ease;

display: flex;
justify-content: center;
align-items: center;
`

export const Image = styled.div`

`

export const Menu = styled.ul`
display:flex;
`