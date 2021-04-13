import styled, { css, keyframes } from 'styled-components'

const movementframe = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const ringMove = ({ time = '1.2s', type = 'infinite' } = {}) =>
  css`animation: ${time} ${movementframe} cubic-bezier(0.5, 0, 0.5, 1) ${type};`

export const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #253a46;
    border-radius: 50%;
    ${ringMove()}
    border-color: #253a46 transparent transparent transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`
