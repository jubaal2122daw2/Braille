/**
 * @description Vista que carga el menú de selección en catalán.
*/

import * as React from 'react';
import '../App.css';
import { Link, Outlet } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AbcIcon from '@mui/icons-material/Abc';
import CameraAltIcon from '@mui/icons-material/CameraAlt';


export default function Catala() {
    return (
        <div>
            <div className="box-border h-18 p-5 ">
                <Link className="back rounded-md" to='/'><ArrowBackIosNewIcon className="arrow" />Tornar</Link>
            </div>
            <div className="container px-5 py-28 mx-auto grid content-center">
                    <div className='flex flex-wrap flex-col m-auto gap-20 lg:flex-row'>
                        <Link className="rounded-full gap-10 ring-4 ring-teal-700 py-8 sub-menu lg:w-48" to='/abecedario'><AbcIcon style={{ fontSize: "8rem", color: "#de7a22" }} /></Link>
                        <Link className="rounded-full gap-10 ring-4 ring-teal-700 px-16 py-16 sub-menu lg:w-48" to='/camara'><CameraAltIcon style={{ fontSize: "3.5rem", color: "#de7a22"}} /></Link>
                    </div>
            </div>

        </div>
    );
}