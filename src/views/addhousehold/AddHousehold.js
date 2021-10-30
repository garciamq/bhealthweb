import React, { lazy,useState  } from 'react'
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

 
} from '@coreui/react'
import {
    TheSidebar,
    TheFooter,
    TheHeader,
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
const AddHousehold = () => {
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
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <CCard>
        
        <div className="App">
      {/* <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">REACT CRUD</h1>
          <p className="lead">putanginang react to ang hirap :)</p>
        </div>
      </div> */}
      {/* <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span claclassName="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
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
    </div>
    </CCard>

  

        
    
      <TheFooter/>
      </div>
      </div>
      </>
  )
}

export default AddHousehold

