import React, {useState} from 'react';
import {
  Link,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Collapse,
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import {StyledCard, StyledLink} from './styledComponents';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Image = styled.div`
height:180px;
`;

const Title = styled.div`
height:40px;
overflow:hidden;
`;

const Book = ({book, handleFavorite}) => {
  const [expanded, setExpanded] = useState (false);
  const handleExpandClick = () => {
    setExpanded (!expanded);
  };

  return (
    <StyledCard extended={expanded} elevation={5}>
      <CardHeader
        title={
          <Title>
            <Typography variant="h6">
              {book.volumeInfo.title}
            </Typography>
          </Title>
        }
        subheader={
          book.volumeInfo.authors
            ? book.volumeInfo.authors
                .filter ((author, index) => [index] < 1)
                .map (author => (
                  <Typography key={author} variant="subtitle2">
                    {author}
                  </Typography>
                ))
            : null
        }
      />

      <CardContent>
        <Grid container direction="column" alignItems="center" spacing={5}>

          <Grid item>
            <Image>
              <img
                alt="book"
                src={
                  book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : null
                }
              />
            </Image>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <IconButton onClick={() => handleExpandClick}>
          <ExpandMoreIcon />

        </IconButton>
        <IconButton
          aria-label="add to favorites"
          onClick={() => handleFavorite (book)}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <Typography variant="h6">
            Description
          </Typography>
          <Typography variant="body2" component="p">
            {book.searchInfo ? book.searchInfo.textSnippet : null}
          </Typography>

          <Link href={book.volumeInfo.previewLink}>
            <StyledLink variant="body1">
              Link to Book
            </StyledLink>

          </Link>

        </CardContent>
      </Collapse>
    </StyledCard>
  );
};

export default Book;
