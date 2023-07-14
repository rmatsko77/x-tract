import React from 'react'
import './ThankYou.css'
import { TbCoffee } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

function ThankYou() {

    const handleClose = () => {
        const container = document.getElementById('thank-you-container')

        container.style.display = 'none'
    }

    return (
        <div onClick={handleClose} className='thank-you-container' id='thank-you-container'>
            <div className='thank-you'>
                <button onClick={handleClose} className='thank-you-close'><AiOutlineClose /></button>
                <h3>Welcome to the club!</h3>
                <p> Please check your email for your discount code.</p>
                <TbCoffee className='thank-you-icon' />
            </div>
        </div>
    )
}

export default ThankYou 