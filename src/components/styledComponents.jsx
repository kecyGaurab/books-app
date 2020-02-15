import {Card, Typography} from '@material-ui/core'
import styled, {css} from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite'
import {Link} from 'react-router-dom'

export const StyledCard = styled(Card)`
  ${props => {
    return css`
      height: ${props.extended === true ? ' 590px' : '380px'};
    `
  }}
`
export const StyledFavoriteIcon = styled(FavoriteIcon)`
  ${props => {
    return css`
      color: red;
    `
  }}
`

export const StyledLink = styled(Typography)`
  ${props => {
    return css`
      padding-top: '8px';
    `
  }}
`

export const StyledLinkRouter = styled(Link)`
  ${props => {
    return css`
      text-decoration: none;
    `
  }}
`
