/** @jsxImportSource @emotion/react */
import { SyntheticEvent, useState } from 'react';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Container, Paper, Tab, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import AllUsersPage from './allUsersPage';
import NewUsersPage from './newUsersPage';
import styles from './styles';
import { RootState } from '../../../redux/store';
import { ROLES } from '../../../constants/roles';

const NEW_USERS_TAB_INDEX = '1';
const ALL_USERS_TAB_INDEX = '2';

function ConfirmUserRegistrationTable() {
  const [tabValue, setTabValue] = useState(ALL_USERS_TAB_INDEX);

  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const users = useSelector((state: RootState) =>
    state.usersReducer.filter((user) => user.roles === ROLES.UNAPPROVED && user.status === ''),
  );

  return (
    <Container maxWidth="xl" css={styles.containerStyles}>
      <Box>
        <Typography variant="h2" fontSize="2rem" color="primary">
          Requests
        </Typography>
      </Box>
      <Paper elevation={3} css={styles.paperStyles}>
        <TabContext value={tabValue}>
          <TabList value={tabValue} onChange={handleTabChange}>
            <Tab label="All requests" value={ALL_USERS_TAB_INDEX} />
            <Tab
              disabled={users.length === 0}
              label={`New requests (${users.length || 0})`}
              value={NEW_USERS_TAB_INDEX}
            />
          </TabList>
          <TabPanel value={NEW_USERS_TAB_INDEX} css={styles.tabPanelStyles}>
            {users.length === 0 || <NewUsersPage />}
          </TabPanel>
          <TabPanel value={ALL_USERS_TAB_INDEX} css={styles.tabPanelStyles}>
            <AllUsersPage />
          </TabPanel>
        </TabContext>
      </Paper>
    </Container>
  );
}

export default ConfirmUserRegistrationTable;
