import React from 'react'
import {
  DoctorSideBar,
  TheFooter,
  NurseContent,
  NurseHeader,
  NurseSideBar,
  DoctorHeader,
  DoctorContent,
  PatientSideBar,
  PatientContent,
  PatientHeader,
} from './index'



const PatientPage = () => {

  return (
    <div className="c-app c-default-layout">
      <PatientSideBar/>
      <div className="c-wrapper">
        <PatientHeader/>
        <div className="c-body">
          <PatientContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
    //  </div>
  )
}

export default PatientPage



