import React from 'react'

import { LdsRing, Container } from './styles'

export const Spinner = () => {
  return (
    <Container>
      <LdsRing><div /><div /><div /><div /></LdsRing>
    </Container>
  )
}
