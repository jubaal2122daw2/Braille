import * as React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Letra from './letra';

export default function Camara() {
    const URL = "./models/";
    let model, webcam, labelContainer, maxPredictions, tiempo;
    let continuar = false;
    const [letra, setLetra] = useState('');
    const [stopped, setStopped] = useState(false);
    console.log("La letra del hook -->", letra);
    console.log(stopped);

    useEffect(() => {
        if(!stopped) init();
    }, [stopped]);

    const handleChange = (newValue) => {
        console.log("entra en handlechange");
        setStopped(newValue);
    }

    function canceltiempo(){
        clearTimeout(tiempo);
    }

    // Load the image model and setup the webcam

    async function init() {
        continuar = true;
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        // const devices = await navigator.mediaDevices.enumerateDevices();

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = false; // whether to flip the webcam
        webcam = new tmImage.Webcam(300, 300, flip); // width, height, flip
        await webcam.setup({ facingMode: "environment" }); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }

        tiempo = setTimeout(() => {
            webcam.stop();
            continuar = false;
            setStopped(true);
        }, 9000);

    }

    async function loop() {
        webcam.update(); // update the webcam frame
        await predict();
        if (continuar) window.requestAnimationFrame(loop);
    }

    // run the webcam image through the image model
    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
            if (prediction[i].probability.toFixed(2) > 0.90) {
                setLetra(prediction[i].className);
            }
        }
    }
    return (
        <>
            {!stopped ? (
                <div className='grid place-items-center h-screen bg-black'>
                    <div className="-mb-16 box-border h-18 w-32 p-4 place-self-start">
                        <Link onClick={() => {canceltiempo(), webcam.stop()} } className="back rounded-md" to='/catala'><ArrowBackIosNewIcon className="arrow" />Volver</Link>
                    </div>
                    {/* <div className='text-teal-500' onClick={() => { init() }}>Click</div> */}
                    {/* <div className='text-teal-500'>Centra el texto en la cámara para traducir</div> */}
                    <div id="webcam-container"></div>
                    <div id="label-container" className='text-teal-500'></div>
                </div>
            ) : (<Letra letra={letra} cambiarStop={handleChange} />)}
        </>
    );
}