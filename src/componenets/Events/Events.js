import React from 'react'
import './Events.css'
import { Image } from 'react-bootstrap'

function Events() {
    return (
        <div id='events' className='events-container'>
            <h4>Upcoming Events</h4>
            <div className='event'>
                <Image alt='shred flintstone' 
                    src='imgs/event-imgs/shred-flintstone.webp'
                    className='event-img' />
                <div className='event-details'>
                    <h5 className='date-time'>July 21 7:00pm</h5>
                    <h6 className='event-title'>Shred Flintstone</h6>
                    <p className='event-description'>Northern New Jersey's Shred Flintstone is the indie garage punk rock project.</p>
                </div>
            </div>
            <div className='event'>
                <Image alt='shred flintstone'
                    src='imgs/event-imgs/tinzo.webp'
                    className='event-img' />
                <div className='event-details'>
                    <h5 className='date-time'>July 23 9:00pm</h5>
                    <h6 className='event-title'>DJ Tinzo</h6>
                    <p className='event-description'>Tinzo from Book Club. House / D&B / Techno</p>
                </div>
            </div>
            <div className='event'>
                <Image alt='shred flintstone'
                    src='imgs/event-imgs/potery.webp'
                    className='event-img' />
                <div className='event-details'>
                    <h5 className='date-time'>July 24 5:00pm</h5>
                    <h6 className='event-title'>Ceramics Lesson w/ Mike</h6>
                    <p className='event-description'>25$ / person</p>
                </div>
            </div>
            <div className='event'>
                <Image alt='shred flintstone'
                    src='imgs/event-imgs/author.webp'
                    className='event-img' />
                <div className='event-details'>
                    <h5 className='date-time'>July 29 12:00pm</h5>
                    <h6 className='event-title'>Author: Natsuko Imamura</h6>
                    <p className='event-description'>Author of 'The Woman in the Purple Skirt' does a free reading and signing.</p>
                </div>
            </div>
            <div className='event'>
                <Image alt='shred flintstone'
                    src='imgs/event-imgs/mic.webp'
                    className='event-img' />
                <div className='event-details'>
                    <h5 className='date-time'>August 2 10:00pm</h5>
                    <h6 className='event-title'>Open Mic Night</h6>
                    <p className='event-description'>Join us for a night of stand up comedy. 1/2 off drinks!</p>
                </div>
            </div>
        </div>
    )
}

export default Events