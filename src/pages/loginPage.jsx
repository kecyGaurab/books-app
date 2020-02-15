import React from 'react'
import {Container, Grid} from '@material-ui/core'
import Login from '../components/login'
import Signup from '../components/signup'

const LoginPage = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignContent="center"
      >
        <Grid item xs={4}>
          <Login />
        </Grid>
        <Grid item xs={4}>
          <Signup />
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage
