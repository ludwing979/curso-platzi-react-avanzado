import styled from 'styled-components'

export const Button = styled.button`
  position: relative;
  margin: 10px auto;
  background: #DE530D;
  border-radius: 20px;
  color: #fff;
  height: 32px;
  display: block;
  width: 60%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`
