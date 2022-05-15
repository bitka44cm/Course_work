/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Box, Container, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { RootState } from '../../../redux/store';
import { ROLES } from '../../../constants/roles';
import {
  adminColumns,
  Column,
  ColumnsInterfaceCollector,
  ColumnsTypeCollector,
  managerColumns,
  PageSize,
  userColumns,
} from '../../../constants/paginatedTableColumns';
import { CustomButton } from '../../common';
import CreateUser from './createUser';
import PaginatedTable from '../../common/paginatedTable';
import { UserWithManager } from '../../../redux/slices/users';
import styles from './styles';

export interface UserData extends Omit<UserWithManager, 'managers' | 'roles' | 'id'> {
  roles: string;
}
interface UsersDataBaseLayoutProps {}

function UsersDatabaseLayout(props: UsersDataBaseLayoutProps) {
  const searchUser = useSelector((state: RootState) => state.userReducer);
  const [open, setOpen] = useState(false);

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState(PageSize.SMALL);

  const isAdmin = searchUser.roles === ROLES.ADMIN;
  const isManager = searchUser.roles === ROLES.MANAGER;

  const [count, setCount] = useState<number>(0);
  const data = useSelector((state: RootState) =>
    state.usersReducer.filter((user) => user.status !== 'Rejected'),
  );
  const [loadedUsers, setLoadedUsers] = useState<UserData[]>([]);

  useEffect(() => {
    setLoadedUsers(data);
  }, [data.length]);

  const tabelizeData = useCallback(
    (recvData: UserWithManager[]): UserData[] => {
      return recvData.map((user, index) => {
        const { roles } = user;
        const rowIndex = rowsPerPage * page + index + 1;

        return {
          ...user,
          id: rowIndex,
          roles,
        };
      });
    },
    [page, rowsPerPage, data],
  );

  const ALL_TAB = 0;
  const MANAGER_TAB = 1;
  const EMPLOYEE_TAB = 2;

  const [tab, setTab] = useState(ALL_TAB);

  function filterUsers(userRole: string) {
    if (data) {
      const filteredUsers = data.filter((u) => u.roles === userRole);
      return [...tabelizeData(filteredUsers)];
    }
    return [];
  }

  const filterButtonHandler = (filterProps: { userRole: string; filterTab: number }) => {
    const { userRole, filterTab } = filterProps;
    if (userRole !== 'All') {
      setLoadedUsers(filterUsers(userRole));
      setTab(filterTab);
      setCount(filterUsers(userRole).length);
    } else if (data) {
      setLoadedUsers([...tabelizeData(data)]);
      setTab(filterTab);
    }
  };
  let columns;

  if (isAdmin) {
    columns = adminColumns;
  } else if (isManager) {
    columns = managerColumns;
  } else {
    columns = userColumns;
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <Container maxWidth="lg" css={styles.containerStyles}>
        <Box css={styles.dataBaseHeaderStyles}>
          <Typography variant="h2" fontSize="2rem" mb={3} color="primary">
            Users data
          </Typography>
          <Box css={styles.dataBaseHeaderButtonsWrapperStyles}>
            <Box css={styles.filterButtonsWrapperStyles}>
              <CustomButton
                value="All"
                color="dark"
                css={styles.tabBtn}
                type="button"
                onClick={() => filterButtonHandler({ userRole: 'All', filterTab: ALL_TAB })}
                disabled={tab === ALL_TAB}
              />
              <CustomButton
                value="Manager"
                color="dark"
                css={styles.tabBtn}
                type="button"
                onClick={() =>
                  filterButtonHandler({ userRole: ROLES.MANAGER, filterTab: MANAGER_TAB })
                }
                disabled={tab === MANAGER_TAB}
              />
              <CustomButton
                value="Employee"
                color="dark"
                css={styles.tabBtn}
                type="button"
                onClick={() =>
                  filterButtonHandler({ userRole: ROLES.EMPLOYEE, filterTab: EMPLOYEE_TAB })
                }
                disabled={tab === EMPLOYEE_TAB}
              />
            </Box>
            <Box>
              {searchUser.roles === ROLES.ADMIN && (
                <CustomButton
                  startIcon={<AddIcon />}
                  color="primary"
                  variant="contained"
                  fullWidth
                  value="Add new user"
                  onClick={() => setOpen(true)}
                />
              )}
              {open && <CreateUser setOpen={setOpen} open={open} />}
            </Box>
          </Box>
        </Box>
        <PaginatedTable
          page={page}
          count={count}
          columns={columns as Column<ColumnsInterfaceCollector, ColumnsTypeCollector>[]}
          loadedData={loadedUsers}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          rowsPerPage={rowsPerPage}
        />
      </Container>
    </>
  );
}

export default UsersDatabaseLayout;
