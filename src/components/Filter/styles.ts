import styled from 'styled-components';

export const Container = styled.div`
margin-bottom: 20px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

div{ 
    margin:0 20px;
}
`

export const Label = styled.label`
font-size: 12px;
margin:5px;

`

export const Input = styled.input`
width: 150px;
height: 40px;

align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.0rem - 1px);
  position: relative;
  text-decoration: none;
  width: auto;
`