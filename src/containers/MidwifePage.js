import React from 'react'
import {
  DoctorSideBar,
  TheFooter,
  MidwifeContent,
  MidwifeHeader,
  MidwifeSideBar,
  NurseContent,
  NurseHeader,
  NurseSideBar,
  DoctorHeader,
  DoctorContent,
} from './index'



const MidwifePage = () => {

  return (
    <div className="c-app c-default-layout">
      <MidwifeSideBar/>
      <div className="c-wrapper">
        <MidwifeHeader/>
        <div className="c-body">
          <MidwifeContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
    //  </div>
  )
}

export default MidwifePage



