import React from 'react'
import { Button } from 'react-bootstrap'
export default function GoogleAuth() {
    const hendlegoogleAuth = () => {
        const str = "http://localhost:3001/auth/googlelogin";
        window.open(str, "_self")
    };
    return (
        <Button className="bg-dark mt-3" onClick={hendlegoogleAuth}>Accedi con google</Button>
    )
};