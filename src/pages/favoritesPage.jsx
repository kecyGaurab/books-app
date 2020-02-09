import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {Grid, Container} from '@material-ui/core'
import Book from '../components/book'

const FavoritesPage = ({favorites}) => {
  return (
    <Container>
      <Grid container direction="row" spacing={3}>
        {favorites
          ? favorites.map(favorite => (
              <Fragment key={favorite.etag}>
                {favorite.volumeInfo.imageLinks ? (
                  <Grid key={favorite.etag} item md={3} xs={12}>
                    <Book book={favorite} />
                  </Grid>
                ) : null}
              </Fragment>
            ))
          : null}
      </Grid>
    </Container>
  )
}

const mapStateToProps = state => {
  return {favorites: state.favorites}
}

export default connect(mapStateToProps)(FavoritesPage)
