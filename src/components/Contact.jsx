import React, { useContext, useState, useEffect } from "react";
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CInput,
    CCard,

} from '@coreui/react'

function Contact () {
    const [small, setSmall] = useState(false)

    const pop = () => {
        setSmall(!small);
      }
    return (
        <div id='contact'>
            <h1>History of Health Center</h1>
            <form>
                <input type='text' placeholder='Full Name' />
                <input type='email' placeholder='Type Your E-Mail' />
                <textarea placeholder='Write Here.....'></textarea>
                <input onClick={(pop)} type='submit' value='SEND' />

            </form>
            <CModal
                show={small}
                onClose={() => setSmall(!small)}
                size="sml"
            >
                <CModalHeader closeButton>
                    <CModalTitle>Feedback Submitted Successfully</CModalTitle>
                </CModalHeader>
                <CModalBody>
                   We have received your feedback, We'll try to improve our app to make a better service, Thank you!
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={() => setSmall(!small)}>Okay</CButton>{' '}

                </CModalFooter>
            </CModal>
        </div>
    )
}

export default Contact;
