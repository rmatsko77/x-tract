import React from 'react'
import './Signup.css'
import { GrClose } from "react-icons/gr"

function Signup() {

    const handleClose = () => {
        const container = document.getElementById('signup-container')

        container.style.display = 'none'
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById('thank-you-container').style.display = 'block'
        handleClose()
    }

    return (
        <div className='signup-container' id='signup-container'>
            <button className='close-btn' aria-label='close-button' onClick={handleClose}><GrClose /></button>
            <img src='imgs/promo.webp' className='promo' alt='promo'></img>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email Address' className='email-input' required></input>
                <button type='submit' className='signup-button'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup