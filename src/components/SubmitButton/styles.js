import styled from 'styled-components'

export const Button = styled.button`
  position: relative;
  margin: 10px auto;
  background: #8d00ff;
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
