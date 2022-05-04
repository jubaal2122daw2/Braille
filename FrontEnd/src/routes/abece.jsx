import * as React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';

export default function Abece() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [abecedario, setAbecedario] = useState([]);
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        fetch("https://localhost:8443/api/abecedario", requestOptions)
            .then(response => response.text())
            .then(result => setAbecedario(result),
                (error) => {
                    // setIsLoaded(true);
                    setError(error);
                });
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    } else {
        return (
            <div>
                {abecedario}
            </div>
        );
    }
}
