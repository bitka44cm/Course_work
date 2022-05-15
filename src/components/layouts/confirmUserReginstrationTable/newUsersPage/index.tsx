/** @jsxImportSource @emotion/react */
import React, { ReactElement, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { UserState } from '../../../../redux/slices/users';
import { RootState } from '../../../../redux/store';
import {
  newRegisterRequestColumns,
  NewUserRequestInfo,
  PageSize,
} from '../../../../constants/paginatedTableColumns';
import PaginatedTable from '../../../common/paginatedTable';
import { ROLES } from '../../../../constants/roles';

function NewUsersPage(): ReactElement {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(PageSize.SMALL);

  const newUsers = useSelector((state: RootState) =>
    state.usersReducer.filter((user) => user.roles === ROLES.UNAPPROVED && user.status === ''),
  );

  const tabelizedData = useCallback(
    (usersData: UserState[]) => {
      return usersData.map((user, index): NewUserRequestInfo => {
        return {
          email: user.email,
          name: user.name,
          surname: user.surname,
        };
      });
    },
    [newUsers],
  );

  return (
    <PaginatedTable
      count={newUsers.length}
      rowsPerPage={rowsPerPage}
      page={page}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      loadedData={tabelizedData(newUsers)}
      columns={newRegisterRequestColumns}
    />
  );
}

export default NewUsersPage;
