import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'

export const ProtectedRoute = ({children}) => {
    const {login} = React.useContext(UserContext)

  return login ? <div>{children}</div> : <Navigate to ='/login'/>
}
