import {Card, Typography} from '@material-ui/core'
import styled, {css} from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite'

export const StyledCard = styled(Card)`
  ${props => {
    return css`
      height: ${props.extended === true ? ' 580px' : '350px'};
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
