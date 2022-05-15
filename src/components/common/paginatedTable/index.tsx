/** @jsxImportSource @emotion/react */
import React from 'react';

import { SerializedStyles } from '@emotion/react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { Column, PageSize, ColumnsTypeCollector } from '../../../constants/paginatedTableColumns';
import styles from '../../layouts/usersDatabase/styles';

interface PaginatedTableProps<T, R> {
  count: number;
  customRowStyles?: SerializedStyles;
  columns: R[];
  page: number;
  loadedData: T[];
  rowsPerPage: number;
  setPage: (page: number) => void;
  setRowsPerPage: (rowsPerPage: number) => void;
}

// eslint-disable-next-line react/function-component-definition
const PaginatedTable = <T, R extends Column<T, ColumnsTypeCollector>>({
  count,
  page,
  columns,
  loadedData,
  customRowStyles,
  rowsPerPage,
  setPage,
  setRowsPerPage,
}: PaginatedTableProps<T, R>) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper elevation={2}>
      <TableContainer css={styles.tableStyle}>
        <Table stickyHeader aria-label="paginated-table">
          <TableHead>
            <TableRow>
              {columns.map((column: R) => (
                <TableCell
                  key={uuidv4()}
                  align={column.align}
                  style={{ minWidth: column.minWidth, width: column.width }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loadedData.map((row: any) => {
              return (
                <TableRow
                  css={customRowStyles && customRowStyles}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={uuidv4()}>
                  {columns.map((column: R) => {
                    const value = row[column.key];
                    return (
                      <TableCell
                        css={column.customStyles && column.customStyles}
                        key={column.key}
                        align={column.align}>
                        {column.customLayout ? column.customLayout(row) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={Object.values(PageSize)}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={count <= 0 ? 0 : page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default PaginatedTable;
