import React from 'react'
import {signInWithGoogle} from '../firebase/utils'
import {
  Select,
  TextField,
  Grid,
  Typography,
  MenuItem,
  Button,
  Card,
  CardContent,
  InputLabel,
} from '@material-ui/core'

export const LoginButton = () => {
  return (
    <Grid container direction="row" spacing={2} justify="space-between">
      <Grid item>
        <Button variant="outlined">Sign in</Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={signInWithGoogle}>
          Sign in Google
        </Button>
      </Grid>
    </Grid>
  )
}

const Login = () => {
  return (
    <form>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={3}>
          <Typography variant="h6">Login</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            label="Username"
            name="Email"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            label="Password"
            name="password"
          />
        </Grid>
        <Grid item xs={3}>
          <LoginButton />
        </Grid>
      </Grid>
    </form>
  )
}

export default Login
