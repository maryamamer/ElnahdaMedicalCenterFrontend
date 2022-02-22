import { Route,Redirect } from 'react-router-dom'
import { useContext } from 'react';
import Auth from './context/auth';

const PrivateRoute = ({children,...rest}) =>{
  let {user} =useContext(Auth)

    return (
        <Route {...rest}>{!user ? <Redirect to="/Login"/> : children}</Route>
    )

}

export default PrivateRoute;