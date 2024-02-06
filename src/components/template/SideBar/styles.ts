import styled from 'styled-components'

export const Container = styled.div<{sidebar: any}>`
  background-color: #FFFFFF;
  box-shadow: 1px 1px 2px grey;
  position: fixed;
  height: 100%;
  top: 0px;
  width: 100%;
  right: ${props => props.sidebar ? "0" : "-100%"};
  animation: showSideBar 0.4s;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes showSideBar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }

  
`

export const BtnClose = styled.div`
width: 100%;
padding:10px 20px;

p{
  color:#534f88;
}
`

export const MenuList = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

ul{
  color:black;
  z-index: 999;
}

`
export const Logo = styled.div`
width: 55%;
height: 15%;
`
export const List = styled.div`
li{
  display: flex;
  align-items: center;
  list-style: none;
  font-size:25px;
  padding: 10px 10px;
}
li:hover{
  color:#FFFFFF;
  background-color: #FFCB47;
  border-radius: 25px;
}`