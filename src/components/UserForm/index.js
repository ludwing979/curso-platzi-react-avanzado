import React from 'react'

import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'

import { Form, Input, Title, Error } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} type='text' placeholder='Email' {...email} />
        <Input disabled={disabled} type='password' placeholder='Password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
