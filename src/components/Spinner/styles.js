import styled, { keyframes } from 'styled-components'

const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const LdsEllipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #253a46;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    &:nth-child(1) {
      left: 8px;
      animation: 0.6s ${ldsEllipsis1} infinite;
    }
    &:nth-child(2) {
      left: 8px;
      animation: 0.6s ${ldsEllipsis2} infinite;
    }
    &:nth-child(3) {
      left: 8px;
      animation: 0.6s ${ldsEllipsis2} infinite;
    }
    &:nth-child(4) {
      left: 8px;
      animation: 0.6s ${ldsEllipsis3} infinite;
    }
  }
`

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`
