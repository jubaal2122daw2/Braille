import * as React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Abece() {
    const [error, setError] = useState(null);
    const [abecedario, setAbecedario] = useState([]);
    const [imagen, setImagen] = useState('');
    const [letra, setLetra] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [buscarLetra, setBuscarLetra] = useState('');

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };
        fetch(`https://${window.location.hostname}:8443/api/abecedario`, requestOptions)
            .then(response => response.text())
            .then(result => setAbecedario(JSON.parse(result)),
                (error) => {
                    setError(error);
                });
    }, [])

    const handleChange = (newValue) => {
        setShowModal(newValue);
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {
        return (
            <div>
                <div className="box-border h-18 w-32 p-4 ">
                    <Link className="back rounded-md" to='/catala'><ArrowBackIosNewIcon className="arrow" />Volver</Link>
                </div>
                <div className='flex justify-center pt-10'>
                    <input
                        className="shadow appearance-none border rounded w-4/5 py-4 px-4 text-4xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Cercar la lletra"
                        onChange={(e) => setBuscarLetra(e.target.value)} />
                </div>
                <Modal estadoModal={showModal} onChange={handleChange} imagen={imagen} />
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap flex-row -m-4 text-center">
                        {abecedario.filter((val)=>{
                            if (buscarLetra == ""){
                                return val;
                            }
                            else if (val.letra.toLowerCase().includes(buscarLetra.toLowerCase())){
                                return val;
                            }
                        }).map((item, index) => (
                            <div key={item._id} className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
                                <div className="border-4 border-amber-700 px-4 py-6 rounded-lg h-48 ficha grid content-center"
                                    onClick={() => { setLetra(item), setImagen(item.imagen), setShowModal(true) }}>
                                    <h2 className="title-font font-medium text-7xl text-clip overflow-hidden text-teal-700">{item.letra}</h2>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function Modal(props) {

    function handleChange(estado) {
        props.onChange(estado);
    }

    return (
        <>
            {props.estadoModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <img src={`./letras_catalan/${props.imagen}`} alt="letra_Abecedario" className="w-full" />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-12 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => { handleChange(false) }}
                                    >
                                        Tancar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}


