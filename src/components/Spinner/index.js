import React from 'react'

import { LdsEllipsis, Container } from './styles'

export const Spinner = () => {
  return (
    <Container>
      <LdsEllipsis><div /><div /><div /><div /></LdsEllipsis>
    </Container>
  )
}
