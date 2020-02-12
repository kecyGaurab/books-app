import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Chips from './chips'

const Categories = () => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Categories</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Chips />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default Categories
