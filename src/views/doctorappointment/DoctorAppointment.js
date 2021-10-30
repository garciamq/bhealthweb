import React, { Component } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import {
  TheSidebar,
  TheFooter,
  TheHeader,
  DoctorHeader,
  DoctorSideBar
} from '../../components/pages/FirstIndex'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Inject, ScheduleComponent,Day,Week,WorkWeek,Month,Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-react-schedule';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


function DoctorAppointment () {
// private localData:EventSettingsModel={
// dataSource:[{
//   EndTime: new Date(2021,0,4,5,30),
//   StartTime: new Date(20210,4,3,0)
// }]
// };
// private remoteData = new DataManager ({
//   url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
//   adaptor : new WebApiAdaptor,
//   crossDomain: true
// });
    return (
     
        <div className="c-app c-default-layout">
      <DoctorSideBar/>
      <div className="c-wrapper">
        <DoctorHeader/>
        <CCard>
        <CCardBody>
          
          <CRow className="align-items-center mt-3">
           
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton block shape="pill" color="info" >View Appointment</CButton>
            </CCol>
            <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <CButton block shape="pill" color="danger" >Delete</CButton>
            </CCol>
      
          </CRow>
        </CCardBody>   
        </CCard>
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            <ScheduleComponent currentView='Month' selectedDate={new Date(2021,4,5)}>
              <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
            </ScheduleComponent>
        
            </Switch>
          </React.Suspense>
      </HashRouter>
        <TheFooter/>
        {/* <Redirect from="/appoinment" to="/appointment" /> */}
      </div>
      </div>
   
       

      
    );
  }

export default DoctorAppointment;
