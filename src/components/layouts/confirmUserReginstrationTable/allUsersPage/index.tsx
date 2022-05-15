/** @jsxImportSource @emotion/react */
import React, { ReactElement, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { UserState } from '../../../../redux/slices/users';
import { RootState } from '../../../../redux/store';
import {
  allRegisterRequestColumns,
  AllUserRequestInfo,
  PageSize,
} from '../../../../constants/paginatedTableColumns';
import PaginatedTable from '../../../common/paginatedTable';
import { ROLES } from '../../../../constants/roles';

function AllUsersPage(): ReactElement {
  const [rowsPerPage, setRowsPerPage] = useState(PageSize.SMALL);
  const [page, setPage] = useState(0);

  const allUsers = useSelector((state: RootState) =>
    state.usersReducer.filter((user) => user.roles !== ROLES.UNAPPROVED),
  );

  const tabelizedData = useCallback(
    (usersData: UserState[]) => {
      return allUsers.map((user): AllUserRequestInfo => {
        return {
          email: user.email,
          name: user.name,
          surname: user.surname,
          status: user.status,
          role: user.roles || '-',
        };
      });
    },
    [allUsers],
  );

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <PaginatedTable
        count={allUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        loadedData={tabelizedData(allUsers)}
        columns={allRegisterRequestColumns}
      />
    </>
  );
}

export default AllUsersPage;
