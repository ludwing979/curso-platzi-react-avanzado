import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'

import { Button } from './styles'

export const ReturnButton = () => {
  return (
    <Button onClick={() => window.history.back()}>
      <MdKeyboardArrowLeft size='48px' />
    </Button>
  )
}
