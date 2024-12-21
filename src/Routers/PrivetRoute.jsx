import  { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'
// import Loading from '../../Pages/Loading'

// eslint-disable-next-line react/prop-types
function PrivetRoute({children}) {
    const {user ,isLoading} = useContext(AuthContext)
    const location = useLocation()

    if (isLoading) {
        // return <Loading/>
        return <div>Loading...</div>
    }

if (!user) {
    return <Navigate state={location.pathname} to='/Login'></Navigate>

}
  return (
   children
  )
}

export default PrivetRoute