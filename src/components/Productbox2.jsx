import React from 'react';
import {
    CButton,
  } from '@coreui/react'
const Productbox2 = (props) =>{
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt=''/>
            </div>

            <div className='a-b-text'>
                <h2> {props.title} </h2>
                <CButton href="https://bhealthwebapp.herokuapp.com" className='productbox-button'><h4>View</h4></CButton>
            </div>
        </div>
    )
}

export default Productbox2;
