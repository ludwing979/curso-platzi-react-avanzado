import React, { useContext } from 'react'

import { SubmitButton } from '../components/SubmitButton'
import { Context } from '../Context'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <center><h1>Usuario</h1></center>
      <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
    </>
  )
}
