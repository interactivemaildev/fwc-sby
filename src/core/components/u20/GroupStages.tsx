import React, { memo } from 'react'
import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { StyledTableStage } from 'src/styles/u20'
import LabelCard from 'src/core/components/cards/Label'

interface Props {}

const GroupStages: React.FunctionComponent<Props> = () => {
  return (
    <StyledTableStage>
      <Grid container spacing={4}>
        {[...new Array(6)].map((_item, i) => (
          <Grid key={i} item sm={4}>
            <Box className="container-table">
              <LabelCard variant="primary" title="Group A" />
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell width="100%"></TableCell>
                    <TableCell>P</TableCell>
                    <TableCell>W</TableCell>
                    <TableCell>D</TableCell>
                    <TableCell>L</TableCell>
                    <TableCell>GD</TableCell>
                    <TableCell>Pts</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[...new Array(4)].map((_item2, i) => (
                    <TableRow key={i}>
                      <TableCell width="100%">{'IND'}</TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Grid>
        ))}
      </Grid>
    </StyledTableStage>
  )
}

GroupStages.defaultProps = {}

export default memo(GroupStages)
