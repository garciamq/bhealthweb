import React, { lazy, useState } from 'react'
import './Cards.css';
import styles from './pages/CovidUpdate.module.css';
import CardItem from './CardItem';
import {
  CCarousel,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCarouselCaption,
  CCarouselControl,
  CButton,
  CCard,
  CLabel,
  CInput,
  CFormText,
  CInputRadio,
  CCardFooter,
  CCardBody,
  CCardHeader,
  CCol,
  CModalBody,
  CImg,
  CForm,
  CFormGroup,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CListGroup,
  CListGroupItem,
  CTabContent,
  CTabPane
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

function Cards() {
  const [large, setLarge] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  return (
    <CCard >
      {/* <CCardBody className={styles.head}>
                    <CImg
                      src="avatars/stamaria.jpeg"
                      fluid
                      className={styles.do}
                    /> STA. MARIA BARANGAY HEALTH CENTER
                        <CImg
                      src="avatars/rhusml.png"
                      fluid
                      className={styles.do}
                    /></CCardBody> */}
      <CRow className={styles.hm}>
        <CCol>
          <CCard>
            {/* <CCardHeader>
              STA. MARIA BARANGAY HEALTH CENTER
              <small> info</small>
            </CCardHeader> */}
            <CCardBody>
              <CRow >
                <CCol xs="4" className={styles.chi1}>
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Health Center</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Mission</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Vision</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Service Offers</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Facilities</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >Accomplishments</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Health Information</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(7)} action active={activeTab === 7} >Overview</CListGroupItem>
                  </CListGroup>
                </CCol>
                <CCol xs="8">
                  <CTabContent>
                    <CTabPane active={activeTab === 0} >

                      <CCardBody >
                        <CRow className={styles.carou}>
                          <CCarousel className={styles.tbhome} animate autoSlide={1500}>
                            <CCarouselIndicators />
                            <CCarouselInner className="car1">
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb1.jpg" alt="slide 1" />
                                <CCarouselCaption className="car4"></CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb7.jpg" alt="slide 2" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb4.jpg" alt="slide 3" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb2.jpg" alt="slide 4" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb3.jpg" alt="slide 5" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb5.jpg" alt="slide 6" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb6.jpg" alt="slide 7" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb8.jpg" alt="slide 8" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb9.jpg" alt="slide 9" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb10.jpg" alt="slide 10" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb11.jpg" alt="slide 11" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb12.jpg" alt="slide 12" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb13.jpg" alt="slide 13" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/f14.jpg" alt="slide 14" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb15.jpg" alt="slide 15" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb16.jpg" alt="slide 16" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb17.jpg" alt="slide 17" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb18.jpg" alt="slide 18" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                              <CCarouselItem className="car1">
                                <img className={styles.tbhome1} src="/avatars/fb19.jpg" alt="slide 19" />
                                <CCarouselCaption className="car4"> </CCarouselCaption>
                              </CCarouselItem>
                            </CCarouselInner>

                            <CCarouselControl direction="prev" />
                            <CCarouselControl direction="next" />
                          </CCarousel>
                          <div className="ab">
                            <h3 className="ab" style={{ textAlign: "center" }}>About</h3>

                            <p className="ab" style={{ textAlign: "center" }}>
                              {" "}
                              Rural Health Unit of Sta. Maria, Laguna{" "}
                            </p>

                            <p className="ab" style={{ textAlign: "center" }}>
                              {" "}
                              Brgy. Pob. III, Sta, Maria, Laguna{" "}
                            </p>

                            <p className="ab" style={{ textAlign: "center" }}>Contact No.: (049) 501-3856</p>
                          </div>
                        </CRow>
                      </CCardBody>
                      {/* <div class="container-fluid">
        <div class="row">
            <div class="col-2">
                <div class="homepage-logo mt-2">
                    <img class="menu-nav" src="../images/background/menu-nav.png" alt="img logo"/>
                    <span>B - Health</span>
                </div>
                <div class="home-nav">
                    <div class="nav-item">
                        if(user){
                            <a href="/users" target="_blank">Dashboard</a>
                            } else {
                                <a href="/login">LOGIN</a>
                             }
                    </div>
                </div>
            </div>
            </div>
            </div>






                      {/* </a> */}
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <div className={styles.carou1}>
                        <h1> Health Center Mission </h1>

                        <div className="Container">
                          <h3 style={{ textAlign: "center" }}>
                            "Upang makapagbigay ng maayos, abot-kaya, pantay-pantay at mabisang
                            paglilingkod pangkalusugan para sa lahat kasama ang lokal na
                            pamahalaan at ibat-ibang sektor ng lipunan"
                          </h3>
                        </div>
                      </div>
                    </CTabPane>
                    <CTabPane active={activeTab === 2}>
                      <div className={styles.carou1}>
                      <h1> Health Center Vision </h1>

                      <div className="Container">
                        <h3 style={{ textAlign: "center" }}>
                          "Kalusugang may kalidad para sa lahat ng mamamayan ng Santa Maria"
                        </h3>
                      </div>
                      </div>
                    </CTabPane>
                    <CTabPane active={activeTab === 3}>
                      <p>Tuberculosis (TB) is caused by Mycobacterium tuberculosis, a slow-growing bacteria that thrive in areas of the body that are rich in blood and oxygen, such as the lungs.</p>
                      <p>* It spreads through infected droplets, released in the air by coughing, sneezing etc, by the affected individual. It usually spreads after a prolonged exposure with the infected individual.</p>
                      <p>Immunosuppressed (with weak immunity) individuals are at higher risk of contracting the infection, and they include persons with:</p>
                      <p>* Diabetes</p>
                      <p>* Chronic Kidney diseases</p>
                      <p>* Cancer</p>
                      <p>* HIV/AIDS</p>

                    </CTabPane>
                    <CTabPane active={activeTab === 4}>
                      <p>A vaccine, BCG (bacille Calmette-Guerin), is used to prevent TB. It is more effective in children and its efficacy in adults is inconsistent.</p>
                      <p>* Wear mask, if a family member, is known to infected at home; keep separate utensils and room if possible; keep the most vulnerable kids or aged persons away from the infected person</p>
                      <p>* Avoid large gatherings</p>
                      <p>* Wash hands or sanitize regularly when outside the house
                      </p>
                      <p>* Avoid wearing wet or half wet clothes</p>
                      <p>* Keep the house sufficiently ventilated</p>
                      <p>* Clean AC ducts of car and home regularly</p>
                      <p>* Follow and educate on cough and sneeze etiquette</p>

                    </CTabPane>
                    <CTabPane active={activeTab === 5}>

                      <p>If tuberculosis (tb) untreated,some of the complications may include within you when it is not cure as soon as possible, that's why when you feel something that is unusual with you, consult with your doctor. These are the examples of complications:</p>
                      <p>* Coughing up blood in sputum</p>
                      <p>* Pleurisy - which causes pain during breathing</p>
                      <p>* Pleural effusion - accumulation of fluid in lungs</p>
                      <p>* Lung function damage</p>
                      <p>* Cardiac tamponade</p>
                      <p>* Laryngitis</p>
                      <CImg
                        src="avatars/complication.png"
                        fluid
                        className={styles.tb}
                      />


                    </CTabPane>
                    <CTabPane active={activeTab === 6}>

                    <h1 className={styles.carou2} style={{ textAlign: "center" }}>Santa Maria Laguna Health Center</h1>
      <h1> </h1>

      <div className={styles.carou3}>
        <h3  style={{ textAlign: "center" }}>
          "Health Information is human information"
        </h3>
      </div>

      <div className={styles.carou4}>
        <p>
          Health information is the data related to a person’s medical history,
          including symptoms, diagnoses, procedures, and outcomes. A health
          record includes information such as: a patient’s history, lab results,
          X-rays, clinical information, demographic information, and notes. A
          patient’s health information can be viewed individually to see how the
          patient’s health has changed; it can also be viewed as a part of a
          larger data set to understand how a population’s health has changed,
          and how medical interventions can change health outcomes.
        </p>
      </div>

                    </CTabPane>
                    <CTabPane active={activeTab === 7}>

                      <p>With proper medications and care, TB can be cured. TB bacteria will be cultured and their sensitivities are analyzed to determine the exact course of treatment. Often a combination of therapy is required for several months. In cases resistance to drugs, higher order antibiotics, or even intravenous antibiotics will be required. Multi-drug resistant TB is harder to treat.</p>
                      <h3>Nutrition</h3>
                      <p>Foods to eat:</p>
                      <p>* Calorie dense foods</p>
                      <p>* Protein rich foods</p>
                      <p>* Vitamin A,E,C</p>
                      <p>* B complex vitamin</p>
                      <p>* Selenium, Zinc</p>
                      <p>Foods to avoid:</p>
                      <p>* Avoid alcohol</p>

                      {/* <CImg
                                src="avatars/complication.png"
                                fluid
                                className={styles.tb}
                              /> */}


                    </CTabPane>
                  </CTabContent>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CModal show={large}
        onClose={() => setLarge(!large)}
        size="lg"  >
        <CModalHeader closeButton>
          <CModalTitle>Information & Consent Form</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CImg
              src="avatars/doh.png"
              fluid
              className={styles.doh}
            />


            <CCardHeader className={styles.doh2}>
              TB IMMUNIZATION
              <small> CARD</small>
            </CCardHeader>
            <CImg
              src="avatars/doh.png"
              fluid
              className={styles.doh1}
            />
          </CRow>
          <CCardBody>
            <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Static</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <p className="form-control-static">Username</p>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">NAME</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">HEALTH CENTER</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">BARANGAY</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">FAMILY NO.</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="date-input">DATE OF BIRTH</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">PLACE OF BIRTH</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">ADDRESS</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">MOTHER'S NAME</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">FATHER'S NAME</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">BIRTH HEIGHT</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">BIRTH WEIGHT</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="text-input" name="text-input" placeholder="Name of child" />
                  <CFormText>This is a help text</CFormText>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Sex</CLabel>
                </CCol>
                <CCol md="9">
                  <CFormGroup variant="checkbox">
                    <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                    <CLabel variant="checkbox" htmlFor="radio1">Male</CLabel>
                  </CFormGroup>
                  <CFormGroup variant="checkbox">
                    <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                    <CLabel variant="checkbox" htmlFor="radio2">Female</CLabel>
                  </CFormGroup>

                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="email-input">Email Input</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email" />
                  <CFormText className="help-block">Please enter your email</CFormText>
                </CCol>
              </CFormGroup>

            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
          </CCardFooter>
        </CModalBody>
        <CModalFooter>
          {/* <CButton to="/ChildImmunization" color="primary" 
                  onClick={() => setModal(false)}
                  >I Understand</CButton>{' '} */}
          <CButton to="/Immunization">Cancel</CButton>
        </CModalFooter>
      </CModal>

    </CCard>
  );
}

export default Cards;
