import React from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <RegisterMutation>
                {
                  (register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                      const input = { email, password }
                      const variables = { input }
                      register({ variables }).then(activateAuth)
                    }
                    const errorMsg = error && 'El usuario ya existe o hay algun problema'
                    return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
                  }
                }
              </RegisterMutation>
              <UserForm title='Iniciar Sesion' onSubmit={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
