import React, {useState} from 'react'
import {auth, createUserProfileDocument} from '../firebase/utils'
import {TextField, Grid, Typography, Button} from '@material-ui/core'

const Signup = () => {
  const [credential, setCredential] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async event => {
    event.preventDefault()
    const {displayName, email, password, confirmPassword} = credential
    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName})

      setCredential({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = event => {
    const {name, value} = event.target
    setCredential({...credential, [name]: value})
  }

  const {displayName, email, password, confirmPassword} = credential

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={1}>
        <Grid item xs={3}>
          <Typography variant="h6">Sign Up</Typography>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={displayName}
            type="text"
            label="Display Name"
            name="displayName"
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            onChange={handleChange}
            variant="outlined"
            value={email}
            type="text"
            label="Email"
            name="email"
            required
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={password}
            type="password"
            label="Password"
            name="password"
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant="outlined"
            onChange={handleChange}
            value={confirmPassword}
            type="password"
            label="Confirm Password"
            name="confirmPassword"
            required
          />
        </Grid>
        <Grid item>
          <Button onClick={handleSubmit} variant="outlined">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Signup
