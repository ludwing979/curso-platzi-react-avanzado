import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Logo } from './components/Logo'

import { GlobalStyles } from './styles/GlobalStyles'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
            </>
      }
    </>
  )
}
