import * as React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function Letra(props) {

    function handleChange(estado) {
        props.cambiarStop(estado);
    }

    return (
        <div className='grid place-items-center h-screen'>
            <div className="-mb-16 box-border h-18 w-32 p-4 place-self-start">
                <Link onClick={() => {handleChange(false)} } className="back rounded-md" to='/camara'><ArrowBackIosNewIcon className="arrow" />Volver</Link>
            </div>
            <p className='text-9xl'>{props.letra}</p>
            <div><CampaignIcon className='megafono text-amber-700'></CampaignIcon></div>
        </div>
    );
}