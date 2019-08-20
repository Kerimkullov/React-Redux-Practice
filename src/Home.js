import React from 'react'
import AuthContainer from './components/AuthContainer';
import RegistrationContainer from './components/RegistrationContainer';

export default function Home() {
    return (
        <div>
            <RegistrationContainer/>
            <AuthContainer/>
        </div>
    )
}
