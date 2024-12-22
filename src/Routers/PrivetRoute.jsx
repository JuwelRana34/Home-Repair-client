import  { useContext } from 'react'

import { Navigate, useLocation } from 'react-router'
import UserContext from '../Context/AuthContext'
// import Loading from '../../Pages/Loading'

// eslint-disable-next-line react/prop-types
function PrivetRoute({children}) {
    const {user ,isLoading} = useContext(UserContext)
    const location = useLocation()

    if (isLoading) {
        // return <Loading/>
        return <div>Loading...</div>
    }

if (!user) {
    return <Navigate state={location.pathname} to='/loginPage'></Navigate>

}
  return (
   children
  )
}

export default PrivetRoute