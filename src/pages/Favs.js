import React from 'react'
import { Layout } from '../components/Layout'

import { FavsWithQuery } from '../container/GetFavorites'

export const Favs = () => {
  return (
    <Layout title='Tus Favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
      <div>Favs</div>
      <FavsWithQuery />
    </Layout>
  )
}
