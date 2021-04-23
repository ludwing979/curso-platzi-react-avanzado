import styled from 'styled-components'

export const Button = styled.button`
  color: #888;
  position: absolute;
  top: 10px;
  left: 0;
  & svg {
    margin-right: 40px;
    margin-bottom: 10px;
  }
  &:active {
    color: black;
  }
`
