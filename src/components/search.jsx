import React from 'react'
import {
  Button,
  TextField,
  Select,
  Grid,
  MenuItem,
  InputAdornment,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const Search = ({
  handleSubmit,
  handleSearch,
  handleSearchParameter,
  query,
  searchParameter,
}) => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="space-between"
      spacing={3}
    >
      <Grid item md={7} xs={12}>
        <TextField
          value={query}
          fullWidth
          onChange={handleSearch}
          size="medium"
          id="outlined-search"
          type="search"
          variant="outlined"
          placeholder="Search for books"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="large" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={2} xs={12}>
        <Button
          disabled={query ? false : true}
          value={query}
          onClick={handleSubmit}
          size="large"
          variant="outlined"
        >
          search
        </Button>
      </Grid>
      <Grid item md={3} xs={12}>
        <Select
          onChange={handleSearchParameter}
          defaultValue="Book-Name"
          variant="outlined"
        >
          <MenuItem value="Author">Author</MenuItem>
          <MenuItem value="Book-Name">Book-Name</MenuItem>
        </Select>
      </Grid>
    </Grid>
  )
}

export default Search
