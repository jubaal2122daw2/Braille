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
            <div className="-mb-16 box-border h-18 p-5 place-self-start">
                <Link onClick={() => { handleChange(false) }} className="back rounded-md" to='/camara'><ArrowBackIosNewIcon className="arrow" />Tornar</Link>
            </div>
            <div className='place-self-center'>
                <p className='text-4xl mx-8 text-center'>La lletra escanejada és:</p>
            </div>
            <div className='letra w-8/12 h-80 lg:h-min sm:w-4/5 lg:w-2/5 sm:h-min sm:mb-0 lg:mb-0 content-center self-center'>
                <p className='text-center mt-6 sm:-mt-10 sm:py-6 lg:-mt-10' style={{fontSize: "8rem"}}>{props.letra}</p>
            </div>

            {/* <div><CampaignIcon className='megafono text-amber-700'></CampaignIcon></div> */}
        </div>
    );
}