import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Chip,
  Avatar,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const Categories = () => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Categories</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Chip avatar={<Avatar>M</Avatar>} label="Clickable" />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default Categories
