import React, { useContext } from 'react'
import { Context } from '../Context'

import { UserForm } from '../components/UserForm'
import { ReturnButton } from '../components/ReturnButton'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <>
      <ReturnButton />
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'
            return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesion' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </>
  )
}
