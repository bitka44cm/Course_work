import { useSelector } from 'react-redux';
import { Location, Navigate, useLocation } from 'react-router-dom';

import { RootState } from '../../../redux/store';
import { ROLES } from '../../../constants/roles';
import { SIGN_IN_ROUTE } from '../../../constants/routeNames';

export type NavigateState = {
  from: Location;
};

export function PrivateRoute({ to, roleName }: { to: JSX.Element; roleName?: ROLES }) {
  const { isAuthenticated } = useSelector((state: RootState) => state.userReducer);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to={SIGN_IN_ROUTE} state={{ from: location }} replace />;
  }
  return to;
}
