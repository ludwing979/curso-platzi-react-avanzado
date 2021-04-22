import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Form = styled.form`
  padding: 16px 0;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Div = styled.div`
  width: 80vw;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  padding: 8px 0;
  text-align: center;
  margin-bottom: 10px;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
`

export const SmallText = styled.span`
  height: 15px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Link = styled(LinkRouter)`
  margin-left: 3px;
`
