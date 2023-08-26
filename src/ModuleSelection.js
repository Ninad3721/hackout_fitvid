import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import PatientModule from './PatientModule';

function ModuleSelection() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [patientModulesatus, setPatientModuleSchedule] = useState(false);
    const handelPatientModuleClick = () => {
        setPatientModuleSchedule(true)
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(isAuthenticated)
    return (
        isAuthenticated &&
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <button >
                Doctor Module
            </button>
            <button onClick={handelPatientModuleClick}>
                Patient Module
            </button>
            <div style={patientModulesatus ? { visibility: "visible" } : { visibility: "hidden" }}>
                <PatientModule />
            </div>
        </div>
    )
}

export default ModuleSelection
