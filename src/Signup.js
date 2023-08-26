import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


function Signup() {
    const { loginWithRedirect } = useAuth0();
    const handleSubmit = () => {
        loginWithRedirect()
    }
    return (
        <div>
            <button onClick={handleSubmit}>Login or Signup</button>
        </div>
    )
}

export default Signup
