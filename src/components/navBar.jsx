import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Search from './search'

const NavBar = ({handleSearch, handleSearchParameter, query, handleSubmit}) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={2}>
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

export default NavBar
