import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  // isAuth: boolean;
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const isAuth = false;

  return isAuth ? children : <Navigate to="/login" />;
}
