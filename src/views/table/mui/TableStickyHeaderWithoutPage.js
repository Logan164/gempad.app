// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const TableStickyHeader = ({ columns, rows, height }) => {
  var maxHeight = height ? height : 432
  console.log(maxHeight, '---------------------maxheight')

  return (
    <TableContainer component={Paper} sx={{ maxHeight: maxHeight }}>
      <Table stickyHeader aria-label='sticky table'>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => { */}
          {rows.map(row => {
            return (
              <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                {columns.map(column => {
                  const value = row[column.id]

                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableStickyHeader
