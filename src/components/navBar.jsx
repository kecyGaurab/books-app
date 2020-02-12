import React from 'react'
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
import {StyledLinkRouter} from './styledComponents'

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
                  <StyledLinkRouter
                    style={{textDecoration: 'none'}}
                    to={'/favorites'}
                  >
                    <MenuItem>Favorites</MenuItem>
                  </StyledLinkRouter>
                  <StyledLinkRouter
                    style={{textDecoration: 'none'}}
                    underline="none"
                    to={'/login'}
                  >
                    <MenuItem>Login</MenuItem>
                  </StyledLinkRouter>
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
