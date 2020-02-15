import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Avatar,
} from '@material-ui/core'
import Search from './search'
import {auth} from '../firebase/utils'

const NavBar = props => {
  const {
    handleSearch,
    handleSearchParameter,
    query,
    handleSubmit,
    currentUser,
  } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={1}>
              <Toolbar>
                {currentUser ? (
                  <Avatar size="large" src={currentUser.photoURL} />
                ) : null}
                <Button onClick={handleClick} size="medium" variant="outlined">
                  Menu
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to={'/favorites'}>
                    <MenuItem>Favorites</MenuItem>
                  </Link>
                  {currentUser ? (
                    <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
                  ) : (
                    <Link to={'/login'}>
                      <MenuItem>Login</MenuItem>
                    </Link>
                  )}
                </Menu>
              </Toolbar>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h3">BOOKS</Typography>
            </Grid>
            <Grid item xs={6}>
              <Search
                query={query}
                handleSearch={handleSearch}
                handleSearchParameter={handleSearchParameter}
                handleSubmit={handleSubmit}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
