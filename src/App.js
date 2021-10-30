import React, { Component } from 'react';
import {BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import ServiceCards from './components/pages/Cards'
import Appointment from './views/appointment/Appointment'
import ClinicalRecord from './views/clinicalrecord/ClinicalRecord'
import Home from './components/pages/Home';
import Immunization from './components/pages/Immunization';
import InformationForm from './components/pages/InformationForm';
import ScreeningForm from './components/pages/ScreeningForm';
import AgreementForm from './components/pages/AgreementForm';
import FeedbackEvaluationForm from './components/pages/FeedbackEvaluationForm';
import ChildImmunization from './components/pages/ChildImmunization';
import ChildImmunization1 from './components/pages/ChildImmunization1';
import TBImmunization from './components/pages/TBImmunization';
import TBImmunization1 from './components/pages/TBImmunization1';
import SignIn from './components/pages/SignIn';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import CovidUpdate from './components/pages/CovidUpdate';
import Design from './components/pages/Design';
import Development from './components/pages/Development';
import Consulting from './components/pages/Consulting';
import DoctorPage from './containers/DoctorPage';
import NursePage from './containers/NursePage';
import PatientPage from './containers/PatientPage';
import MidwifePage from './containers/MidwifePage';
import GetStarted from './components/pages/GetStarted';
import Watch from './components/pages/Watch';
import './scss/style.scss';
import { Inject, ScheduleComponent,Day,Week,WorkWeek,Month,Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-react-schedule';
import ResidentInfo from './views/residentinfo/ResidentInfo';
import MaternalRecord from './views/maternalrecord/MaternalRecord';
import ChildHealthRecord from './views/childhealthrecord/ChildHealthRecord';
import AddHousehold from './views/addhousehold/AddHousehold';
import DoctorAppointment from './views/doctorappointment/DoctorAppointment';
import DoctorClinicalRecord from './views/doctorclinicalrecord/DoctorClinicalRecord';
import DoctorResidentInfo from './views/doctorresidentinfo/DoctorResidentInfo';
import DoctorMaternalRecord from './views/doctormaternalrecord/DoctorMaternalRecord';
import DoctorChildHealthRecord from './views/doctorchildhealthrecord/DoctorChildHealthRecord';
import DoctorAddHouseHold from './views/doctoraddhousehold/DoctorAddHouseHold';
import NTPIdentificationCard from './components/pages/NTPIdentificationCard';
import TreatmentIPTCard from './components/pages/TreatmentIPTCard';
import InformationForm1 from './components/pages/InformationForm1';
import SignInForm from './components/pages/SignInForm';

import Login from './components/pages/Login';

// import  AdminPage  from './containers/AdminPage';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/AdminPage'));

// Pages
const Login1 = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {
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
  render() {
    return (
      
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            {/* <ScheduleComponent currentView='Month' selectedDate={new Date(2021,4,5)}
            eventSettings ={this.localData}>
              <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
            </ScheduleComponent> */}
            {/* <Route path='/AdminPage' exact component={AdminPage} /> */}
             <Route path='/NursePage' exact component={NursePage} />
             <Route path='/Login' exact component={Login} />
             <Route path='/Immunization' exact component={Immunization} />
             <Route path='/InformationForm' exact component={InformationForm} />
             <Route path='/InformationForm1' exact component={InformationForm1} />
             <Route path='/ScreeningForm' exact component={ScreeningForm} />
             <Route path='/AgreementForm' exact component={AgreementForm} />
             <Route path='/FeedbackEvaluationForm' exact component={FeedbackEvaluationForm} />
             <Route path='/NTPIdentificationCard' exact component={NTPIdentificationCard} />
             <Route path='/TreatmentIPTCard' exact component={TreatmentIPTCard} />
             <Route path='/TBImmunization' exact component={TBImmunization} />
             <Route path='/TBImmunization1' exact component={TBImmunization1} />
             <Route path='/ChildImmunization' exact component={ChildImmunization} />
             <Route path='/ChildImmunization1' exact component={ChildImmunization1} />
             <Route path='/PatientPage' exact component={PatientPage} />
             <Route path='/MidwifePage' exact component={MidwifePage} />
              <Route path='/DoctorPage' exact component={DoctorPage} />
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/cards' component={ServiceCards} />
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/SignInForm' component={SignInForm} />
        <Route path='/covidupdate' component={CovidUpdate} />
        <Route path='/design' component={Design} />
        <Route path='/development' component={Development} />
        {/* <Route path='/get-started' component={GetStarted} /> */}
        <Route path='/watch' component={Watch} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/appointment' component={Appointment} />
        <Route path='/doctorappointment' component={DoctorAppointment} />
        <Route path='/doctorclinicalrecord' component={DoctorClinicalRecord} />
        <Route path='/doctorresidentinfo' component={DoctorResidentInfo} />
        <Route path='/doctormaternalrecord' component={DoctorMaternalRecord} />
        <Route path='/doctorchildhealthrecord' component={DoctorChildHealthRecord} />
        <Route path='/doctoraddhousehold' component={DoctorAddHouseHold} />

        <Route path='/clinicalrecord' component={ClinicalRecord} />
        <Route path='/residentinfo' component={ResidentInfo} />
        <Route path='/maternalrecord' component={MaternalRecord} />
        <Route path='/childhealthrecord' component={ChildHealthRecord} />
        <Route path='/addhousehold' component={AddHousehold} />
              <Route exact path="/login" name="Login Page" render={props => <Login1 {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
      
    );
  }
}

export default App;
