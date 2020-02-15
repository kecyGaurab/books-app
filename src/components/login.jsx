import React, {useState} from 'react'
import {signInWithGoogle, auth} from '../firebase/utils'
import {TextField, Grid, Typography, Button} from '@material-ui/core'

export const LoginButton = ({signInWithGoogle, signIn}) => {
  return (
    <Grid container direction="row" spacing={2} justify="space-between">
      <Grid item>
        <Button onClick={signIn} variant="outlined">
          Sign in
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </Grid>
    </Grid>
  )
}

const Login = () => {
  const [user, setUser] = useState({email: '', password: ''})

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(user.email, user.password)
      setUser({email: '', password: ''})
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h6">Login</Typography>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            label="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant="outlined"
            type="password"
            onChange={handleChange}
            label="Password"
            name="password"
            value={user.password}
          />
        </Grid>
        <Grid item>
          <LoginButton
            signInWithGoogle={signInWithGoogle}
            signIn={handleSubmit}
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default Login
