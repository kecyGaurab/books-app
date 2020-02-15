import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios'
import {Grid, Container, CssBaseline} from '@material-ui/core'
import {withRouter} from 'react-router-dom'
import Error from '../components/error'
import NavBar from '../components/navBar'
import Book from '../components/book'
import {auth, createUserProfileDocument} from '../firebase/utils'

const HomePage = props => {
  const apiKey = process.env.REACT_APP_API_KEY
  const [books, setbooks] = useState([])
  const [query, setQuery] = useState('')
  const [searchQuery, setSearchQuery] = useState('coding')
  const [searchParameter, setSearchParameter] = useState('Book-Name')
  const [errorMessage, setErrorMessage] = useState('No results found')
  const [open, setOpen] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    let unsubscribeFromAuth = null
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  const baseUrl = 'https://www.googleapis.com/books/v1/volumes'

  const handleClick = () => {
    setOpen(true)
  }

  const resetSearchQuery = () => {
    setSearchQuery('coding')
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
    setQuery('')
    resetSearchQuery()
  }

  const handleSearchParameter = e => {
    setSearchParameter(e.target.value)
  }

  const handleSearch = e => {
    setQuery(e.currentTarget.value)
  }

  const handleSubmit = e => {
    setSearchQuery(e.currentTarget.value)
  }

  function getByBookName(searchQuery, apiKey) {
    return axios.get(`${baseUrl}?q=${searchQuery}&key=${apiKey}&maxResults=25`)
  }

  function getByAuthor(searchQuery, apiKey) {
    return axios.get(
      `${baseUrl}?q=${null}+inauthor:${searchQuery}&orderBy=newest&key=${apiKey}&maxResults=20`
    )
  }

  useEffect(() => {
    ;(searchParameter === 'Book-Name'
      ? getByBookName(searchQuery, apiKey)
      : getByAuthor(searchQuery, apiKey)
    )
      .then(res => {
        const response = res.data
        setbooks(response.items)
      })
      .catch(err => {
        const error = err.response.data.error.errors[0].reason
        setErrorMessage(error)
        setOpen(true)
        resetSearchQuery()
      })
  }, [searchQuery, searchParameter, apiKey])

  return (
    <Fragment>
      <CssBaseline />
      <NavBar
        handleSearch={handleSearch}
        handleSearchParameter={handleSearchParameter}
        query={query}
        handleSubmit={handleSubmit}
        currentUser={currentUser}
      />
      <Container>
        <Grid container justify="space-around" direction="row" spacing={6}>
          {books ? (
            books.map(book => (
              <Fragment key={book.etag}>
                {book.volumeInfo.imageLinks ? (
                  <Grid key={book.etag} item md={3} xs={12}>
                    <Book book={book} match={props.match} />
                  </Grid>
                ) : (
                  <Error
                    errorMessage={errorMessage}
                    open={open}
                    handleClose={handleClose}
                    handleClick={handleClick}
                  />
                )}
              </Fragment>
            ))
          ) : (
            <Error
              errorMessage="No results found"
              open={open}
              handleClose={handleClose}
              handleClick={handleClick}
            />
          )}
        </Grid>
      </Container>
    </Fragment>
  )
}

export default withRouter(HomePage)
