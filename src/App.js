import React, { useContext, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { Context } from './Context'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
import { Topbar } from './components/Topbar'
import { NavBar } from './components/NavBar'
import { RegisterUser } from './pages/RegisterUser'
import { NotRegisterUser } from './pages/NotRegisterUser'

import { GlobalStyles } from './styles/GlobalStyles'

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Topbar id='top' />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisterUser path='/login' />}
        {!isAuth && <RegisterUser path='/signup' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        {isAuth && <Redirect noThrow from='/signup' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
