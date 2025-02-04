import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Link, Image } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav => <Link key={fav.id} to={`/detail.${fav.id}`}>
          <Image src={fav.src} />
        </Link>)
      }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })
  )
}
