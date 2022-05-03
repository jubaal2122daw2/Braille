import * as React from 'react';
import '../App.css'
import Button from '@mui/material/Button';
import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/logo.svg'

export default function Idiomas() {
    return (
            <div className="flex h-screen">
                <div className='flex flex-col gap-10 m-auto'>
                    <Button className="boton-menu" variant="contained">
                        <Link className="enlace" to='/espanyol'>Español</Link>
                    </Button>
                    <Button className="boton-menu" variant="contained">
                        <Link className="enlace" to='/catala'>Català</Link>
                    </Button>
                    {/* <img className='self-stretch w-28' src={logo} alt="logo" /> */}
                </div>
                <Outlet />
            </div>
    );
}