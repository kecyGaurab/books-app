import React from 'react'
import {Chip, Grid} from '@material-ui/core'

const Chips = () => {
  const genres = [
    'Fiction',
    'Adventure',
    'Mystery',
    'Poetry',
    'History',
    'Science',
    'Crime',
    'Religion',
    'Travel',
    'Humour',
    'Food',
    'Sports',
  ]
  return (
    <Grid container direction="row" spacing={4}>
      {genres.map(genre => (
        <Grid item key={genre}>
          <Chip label={genre} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Chips
