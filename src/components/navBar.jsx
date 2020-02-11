import React from 'react'
import {Link} from 'react-router-dom'
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core'
import Search from './search'

const NavBar = ({handleSearch, handleSearchParameter, query, handleSubmit}) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

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
                  <Link to={'/favorites'}>
                    <MenuItem>Login</MenuItem>
                  </Link>
                </Menu>
              </Toolbar>
            </Grid>
            <Grid item xs={5}>
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
