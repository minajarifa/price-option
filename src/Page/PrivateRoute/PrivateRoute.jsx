import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";

const PrivateRouter = ({children}) => {
    const {user,loading}=useAuth();
    const location =useLocation();
    if(loading){
        return <span className="loading loading-bars loading-lg "></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/Login" state={{from:location}} replace></Navigate>
};

export default PrivateRouter;