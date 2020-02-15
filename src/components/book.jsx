import React, {useState} from 'react'
import {
  Link,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Collapse,
} from '@material-ui/core'

import IconButton from '@material-ui/core/IconButton'
import styled from 'styled-components'
import {StyledCard, StyledLink, StyledFavoriteIcon} from './styledComponents'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import DeleteIcon from '@material-ui/icons/Delete'
import {connect} from 'react-redux'
import {addFavorite} from '../redux/actions/index'
import {removeFavorite} from '../redux/actions/index'

const Image = styled.div`
  height: 180px;
`

const Title = styled.div`
  height: 50px;
  overflow: hidden;
`

const ConnectedBook = ({book, match, ...props}) => {
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleFavorite = book => {
    const {favorites, addFavorite} = props
    const isFavorite =
      favorites && favorites.find(fav => fav.etag === book.etag)
    if (favorites.length === 0 || isFavorite === undefined) {
      addFavorite(book)
    }
  }

  const handleRemove = book => {
    const removeFavorite = props.removeFavorite
    removeFavorite(book)
    window.confirm('Are you sure you want to remove this book')
  }

  const favoriteIcon = book => {
    const favorites = props.favorites
    const isFavorite =
      favorites && favorites.find(fav => fav.etag === book.etag)
    if (favorites.length === 0 || isFavorite === undefined) {
      return <FavoriteIcon />
    } else {
      return <StyledFavoriteIcon />
    }
  }

  return (
    <StyledCard extended={expanded} elevation={5}>
      <CardHeader
        title={
          <Title>
            <Typography variant="subtitle2">{book.volumeInfo.title}</Typography>
          </Title>
        }
        subheader={
          book.volumeInfo.authors
            ? book.volumeInfo.authors
                .filter((author, index) => [index] < 1)
                .map(author => (
                  <Typography key={author} variant="subtitle2">
                    {author}
                  </Typography>
                ))
            : null
        }
      />

      <CardContent>
        <Grid container direction="column" alignItems="center" spacing={5}>
          <Grid item>
            <Image>
              <img
                alt="book"
                src={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : null
                }
              />
            </Image>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <IconButton onClick={() => handleExpandClick(book)}>
          <ExpandMoreIcon />
        </IconButton>
        {match.path === '/' ? (
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleFavorite(book)}
          >
            {favoriteIcon(book)}
          </IconButton>
        ) : (
          <IconButton onClick={() => handleRemove(book)}>
            <DeleteIcon fontSize="default" />
          </IconButton>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">Description</Typography>
          <Typography variant="body2" component="p">
            {book.searchInfo ? book.searchInfo.textSnippet : null}
          </Typography>

          <Link href={book.volumeInfo.previewLink}>
            <StyledLink variant="body1">Link to Book</StyledLink>
          </Link>
        </CardContent>
      </Collapse>
    </StyledCard>
  )
}

const mapStateToProps = state => {
  return {...state, favorites: state.favBooks.favorites}
}
const mapDispatchToProps = dispatch => ({
  addFavorite: book => dispatch(addFavorite(book)),
  removeFavorite: book => dispatch(removeFavorite(book)),
})

const Book = connect(mapStateToProps, mapDispatchToProps)(ConnectedBook)

export default Book
