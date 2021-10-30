import React from 'react';
import Productbox from './Productbox';
import Productbox1 from './Productbox1';
import Productbox2 from './Productbox2';
import pimage1 from '../images/cv.jpg';
// import pimage2 from '../images/s2.png';
import pimage2 from '../images/appointment.jpg';
import pimage3 from '../images/Announcements.jpg';
 
function Products() {
    return (
        <div id='products'>
            <h1>EVENTS</h1>
            <p>Make your appointment with the doctors, Check the announcements, and Look for covid19 updates.</p>
            <div className='a-container'>
                <Productbox image={pimage1} title="Covid Updates" />
                <Productbox1 image={pimage2} title="Available Appointments" />
                <Productbox2 image={pimage3} title="Announcements" />
            </div>
        </div>
    )
}

export default Products;
