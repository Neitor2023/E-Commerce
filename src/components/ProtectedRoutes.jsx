import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

	const token = localStorage.getItem("token")
    //null -> No hay token
    //"dfghnjmk,l.ñ-" -> hay token


    if( token ){
        // token = "dfghnjmk,l.ñ-"
        return <Outlet />
    } else { 
        // token = null
        return <Navigate to='/login' />
    }                   
}

export default ProtectedRoutes;