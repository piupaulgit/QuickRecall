import { Navigate, useLocation } from "react-router-dom";
import Utilities from '../../Services/helpers/utilities';


const Protected = ({ children }) => {
    const authRoutes = [
        'Login',
        'Register',
        'ForgotPassword',
        'SetPassword',
    ]
    
    const auth = Utilities.isValidUser();
    let location = useLocation();
  
    if (!auth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // If user logged in and trying to access auth routes then redirect to dashboard page
    if (auth && authRoutes.includes(children.type.name)) {
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }
  
    return children;
}

export default Protected;