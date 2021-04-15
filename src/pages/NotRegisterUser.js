import React from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <UserForm title='Registrarse' onSubmit={activateAuth} />
              <UserForm title='Iniciar Sesion' onSubmit={activateAuth} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
