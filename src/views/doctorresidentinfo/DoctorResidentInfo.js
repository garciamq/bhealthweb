import React, { lazy,useState } from 'react'
import Axios from "axios";

import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,

} from '@coreui/react'
import {
    TheFooter,
    DoctorSideBar,
    DoctorHeader
  } from '../../components/pages/FirstIndex'

import usersData from '../../views/users/UsersData'
import CIcon from '@coreui/icons-react'


import MainChartExample from '../charts/MainChartExample.js'

const getBadge = status => {
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }
  const fields = ['name','registered', 'role', 'status']

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))



const DoctorResidentInfo = () => {
    const [modal, setModal] = useState(true)
    const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [newWage, setNewWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
    });
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const updateWage = (id) => {
    Axios.put("http://localhost:3001/update", {
      wage: newWage,
      id: id,
    }).then((response) => {
      alert("UPDATED SUCCESSFULLY");
    });
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const deleteRecord = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      alert("DELETED SUCCESSFULLY");
    });
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };
  
  
   

  return (
    <>
    <div className="c-app c-default-layout">
      <DoctorSideBar/>
      <div className="c-wrapper">
        <DoctorHeader/>
        <CCard>
        <CCardBody>
        <CModal 
              show={modal} 
          
            >
              <CModalHeader closeButton>
                <CModalTitle>REMINDER</CModalTitle>
              </CModalHeader>
              <CModalBody>
                This page is for Admin and Nurse only, You can only view the Residents Information table.
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" 
                  onClick={() => setModal(false)}
                  >I Understand</CButton>{' '}
                <CButton to="/DoctorPage">Cancel</CButton>
              </CModalFooter>
            </CModal>
            <CRow className="align-items-center mt-3">
           
           <CCol col="3" sm="2" md="1" xl className="mb-3 mb-xl-0">
             <CButton onClick={addEmployee} block shape="pill" color="success"disabled>Add Resident</CButton>
           </CCol>
           <CCol col="3" sm="2" md="1" xl className="mb-3 mb-xl-0">
             <CButton onClick={getEmployees} block shape="pill" color="info" >View Record</CButton>
           </CCol>
           <CCol col="3" sm="2" md="1" xl className="mb-3 mb-xl-0">
             <CButton block shape="pill" color="success" disabled >Quarter Visit</CButton>
           </CCol>
           <CCol col="3" sm="2" md="1" xl className="mb-3 mb-xl-0">
             <CButton block shape="pill" color="success"disabled>Edit</CButton>
           </CCol>
           <CCol col="3" sm="2" md="1" xl className="mb-3 mb-xl-0">
             <CButton block shape="pill" color="success"disabled>Save</CButton>
           </CCol>
           <CCol col="3" sm="2" md="1" xl className="mb-3 mb-xl-0">
             <CButton block shape="pill" color="danger" disabled>Delete</CButton>
           </CCol>
     
         </CRow>
        </CCardBody>   
        {/* <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              RESIDENT INFORMATION
            </CCardHeader>
            <CCardBody>
            <CDataTable
            
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
        <div className="midd">
        <div className="row">
          <div className="form-group">
            <label for="exampleFormControlInput1">Name:</label>
            <input
              class="form-control col-lg-8"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Age:</label>
            <input
              class="form-control col-lg-8"
              type="number"
              onChange={(event) => {
                setAge(event.target.value);
              }}
            ></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Country:</label>
            <input
              class="form-control col-lg-8"
              type="text"
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            ></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Position:</label>
            <input
              class="form-control col-lg-8"
              type="text"
              onChange={(event) => {
                setPosition(event.target.value);
              }}
            ></input>
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Wage:</label>
            <input
              class="form-control col-lg-8"
              type="number"
              onChange={(event) => {
                setWage(event.target.value);
              }}
            ></input>
          </div>
          <div className="row smalli">
            <button className="btn btn-success" onClick={addEmployee}>
              ADD RECORD
            </button>
            <div className="size1"></div>
            <button className="btn btn-primary" onClick={getEmployees}>
              REFRESH
            </button>
          </div>
        </div>
      </div>
      <br></br>
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            {" "}
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Position</th>
            <th>Wage</th>
            <th>Edit Wage</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((val, key) => {
            return (
              <tr>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.country}</td>
                <td>{val.position}</td>
                <td>{val.wage}</td>
                <td>
                  <input
                    type="text"
                    onChange={(event) => {
                      setNewWage(event.target.value);
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      updateWage(val.id);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteRecord(val.id);
                    }}
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
          
        </tbody>
      </table>

    </CCard>
      <TheFooter/>
      </div>
      </div>
      </>
  )
}

export default DoctorResidentInfo

