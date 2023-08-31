import { Navigate, useLocation } from "react-router-dom";
// import Utilities from "../services/helpers/utilities";


const NonProtected = ({ children }) => {
    // const auth = Utilities.isValidUser();
    let location = useLocation();
  
    if (false) {
      return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }
  
    return children;
}

export default NonProtected;