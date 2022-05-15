import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import * as routes from '../constants/routeNames';
import MainLayout from './layouts/main';
import SignInPage from './layouts/signIn';
import SignUpPage from './layouts/signUp';
import ResetPasswordPage from './layouts/resetPassword';
import { PrivateRoute } from './common/privateRoute';
import ContactUsLayout from './layouts/contactUs';
import ConfirmUserRegistrationTable from './layouts/confirmUserReginstrationTable';
import { ROLES } from '../constants/roles';
import UsersDatabaseLayout from './layouts/usersDatabase';
import PersonalPageLayout from './layouts/personalPage';

function Router() {
  return (
    <Routes>
      <Route path={routes.MAIN_PAGE_ROUTE} element={<PrivateRoute to={<MainLayout />} />} />
      <Route path={routes.SIGN_IN_ROUTE} element={<SignInPage />} />
      <Route path={routes.SIGN_UP_ROUTE} element={<SignUpPage />} />
      <Route path={routes.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={routes.CONTACT_ROUTE} element={<ContactUsLayout />} />
      <Route path={routes.USER_PROFILE_ROUTE} element={<PersonalPageLayout />} />
      <Route
        path={routes.REGISTRATION_REQUESTS_ROUTE}
        element={
          <PrivateRoute roleName={[ROLES.ADMIN] as any} to={<ConfirmUserRegistrationTable />} />
        }
      />
      <Route path={routes.DATABASE_ROUTE} element={<PrivateRoute to={<UsersDatabaseLayout />} />} />
      <Route path="*" element={<Navigate to={routes.MAIN_PAGE_ROUTE} />} />
    </Routes>
  );
}

export default Router;
