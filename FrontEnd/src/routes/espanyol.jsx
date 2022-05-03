import * as React from 'react';
import '../App.css';
import { Link, Outlet } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AbcIcon from '@mui/icons-material/Abc';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


export default function Idiomas() {
    return (
        <div>
            <div className="box-border h-18 w-32 p-4 ">
                <Link className="back rounded-md" to='/idiomas'><ArrowBackIosNewIcon className="arrow" />Volver</Link>
            </div>
            <div className='flex items-center py-48'>
                <div className='flex flex-col m-auto gap-20'>
                    <Link className="rounded-full gap-10 ring-4 ring-teal-700 h-32 w-32 sub-menu" to='/idiomas'><AbcIcon style={{fontSize: "8rem", color: "#de7a22"}} /></Link>
                    <Link className="rounded-full gap-10 ring-4 ring-teal-700 h-32 w-32 sub-menu" to='/abecedario'><CameraAltIcon style={{fontSize: "3.5rem", color: "#de7a22", marginTop: "2.2rem"}} /></Link>
                </div>
            </div>
        </div>
    );
}