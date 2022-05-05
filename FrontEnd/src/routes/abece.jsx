import * as React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Abece() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [abecedario, setAbecedario] = useState([]);
    // useEffect(() => {
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow',
    //     };
    //     fetch("https://localhost:8443/api/abecedario", requestOptions)
    //         .then(response => response.text())
    //         .then(result => setAbecedario(result),
    //             (error) => {
    //                 setError(error);
    //             });
    // }, [])
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else {
    return (
        <div>
            <div className="box-border h-18 w-32 p-4 ">
                <Link className="back rounded-md" to='/espanyol'><ArrowBackIosNewIcon className="arrow" />Volver</Link>
            </div>
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap flex-row -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                        <div className="border-4 border-teal-700 px-4 py-6 rounded-lg h-48 ficha grid content-center">
                            <h2 className="title-font font-medium text-4xl text-gray-900">a</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                        <div className="border-4 border-teal-700 px-4 py-6 rounded-lg h-48 ficha grid content-center">
                            <h2 className="title-font font-medium text-4xl text-gray-900">a</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                        <div className="border-4 border-teal-700 px-4 py-6 rounded-lg h-48 ficha grid content-center">
                            <h2 className="title-font font-medium text-4xl text-gray-900">a</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                        <div className="border-4 border-teal-700 px-4 py-6 rounded-lg h-48 ficha grid content-center">
                            <h2 className="title-font font-medium text-4xl text-gray-900">a</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                        <div className="border-4 border-teal-700 px-4 py-6 rounded-lg h-48 ficha grid content-center">
                            <h2 className="title-font font-medium text-4xl text-gray-900">a</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                        <div className="border-4 border-teal-700 px-4 py-6 rounded-lg h-48 ficha grid content-center">
                            <h2 className="title-font font-medium text-4xl text-gray-900">a</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                        <div className="border-4 border-teal-700 px-4 py-6 rounded-lg h-48 ficha grid content-center">
                            <h2 className="title-font font-medium text-4xl text-gray-900">a</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                        <div className="border-4 border-teal-700 px-4 py-6 rounded-lg h-48 ficha grid content-center">
                            <h2 className="title-font font-medium text-4xl text-gray-900">a</h2>
                        </div>
                    </div>
                    {/* <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
//}
