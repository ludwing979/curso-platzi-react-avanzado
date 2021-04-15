import React from 'react'
import Context from '../Context'

import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return <UserForm onSubmit={activateAuth} />
        }
      }
    </Context.Consumer>
  )
}
