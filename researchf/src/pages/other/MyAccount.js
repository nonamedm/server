import axios from "axios";
import { Fragment, useEffect, useState } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import MyProject from "../../components/other/MyProject";
import Purchase from "../../components/other/Purchase";
import Suggestion from "../../components/other/Suggestion";
import MyService from "../../components/other/MyService";
import MyAccountMenu from "../../components/other/MyAccountMenu";
import ProjectModalSet from "../../components/other/ProjectModalSet";
import ProjectEditModalSet from "../../components/other/ProjectEditModalSet";

const MyAccount = () => {
  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용

  let { pathname } = useLocation();
  let [projectModal, setProjectModal] = useState(false);
  let [projectEditModal, setProjectEditModal] = useState(false);
  let [projectEditNum, setProjectEditNum] = useState();
  let [modalIndex, setModalIndex] = useState(0);
  let [myProjectData,setMyProjectData] = useState([]);
  let [myServiceData,setMyServiceData] = useState([]);
  let [myProjectList,setMyProjectList] = useState(9);
  let [myAccountMenuName,setMyAccountMenuName] = useState("");
  let [userType,setUserType] = useState(0);
  const closeModal = function () {
    setProjectModal(false);
    setProjectEditModal(false);
    setModalIndex(0);
  }
  const openModal = function () {
    setProjectModal(true);
    setModalIndex(0);
  }
  const openEditModal = function (idx) {
    setProjectEditModal(true);
    setProjectEditNum(idx);
  }
  const modalNext = function () {
    if(modalIndex<4) {
      setModalIndex(modalIndex+1);
    }
  }
  const modalPrev = function () {
    if(modalIndex>0) {
      setModalIndex(modalIndex-1);
    }
  }

  let sessionStorage = window.sessionStorage;
  var loginId = sessionStorage.getItem("loginId");

  useEffect(() => {
    axios.post(apiUrl+'/myUserType',{
      userId: loginId
    }).then(function (response) {
      //console.log("유저타입확인",response.data[0].TYPE);
      setUserType(response.data[0].TYPE);
      if(response.data[0].TYPE==1) {
        setMyAccountMenuName("myProjects");
        axios.post(apiUrl+'/myProjectList',{
          userId: loginId
        }).then(function (response) {
          //console.log(response.data);
          setMyProjectData(response.data);
        }).catch(function(error) {
        
        }).then(function () {
          //finally
        });
      } else {
        setMyAccountMenuName("suggestionList");
        axios.post(apiUrl+'/myServiceList',{
          userId: loginId
        }).then(function (response) {
          setMyServiceData(response.data);
        }).catch(function(error) {
        
        }).then(function () {
          //finally
        });
      }
      }).catch(function(error) {
      
      }).then(function () {
        //finally
      });
    
  }, []);

  return (
    <Fragment>
      <SEO
        titleTemplate="My Account"
        description="My Account page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "My Account", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />

        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="custom-row-2">
              <div className="col-12 col-lg-3 col-md-4">
                <MyAccountMenu
                  myProjectData={myProjectData}
                  setMyProjectList={setMyProjectList}
                  setMyAccountMenuName={setMyAccountMenuName}
                >

                </MyAccountMenu>
              </div>
              <div className="col-12 col-lg-9 col-md-8">
                {
                  myAccountMenuName=="myProjects"?
                  <MyProject openModal={openModal} openEditModal={openEditModal} myProjectData={myProjectData} myProjectList={myProjectList}></MyProject>
                  :
                  null
                }
                {
                  myAccountMenuName=="purchase"?
                  <Purchase openModal={openModal} myProjectData={myProjectData} myProjectList={myProjectList}></Purchase>
                  :
                  null
                }
                {
                  myAccountMenuName=="suggestionList"?
                  <Suggestion></Suggestion>
                  :
                  null
                }
                {
                  myAccountMenuName=="myServices"?
                  <MyService myServiceData={myServiceData} ></MyService>
                  :
                  null
                }
                
              </div>
            </div>
          </div>
        </div>
        {
          projectModal ==true?
            <ProjectModalSet 
              closeModal={closeModal}
              modalNext={modalNext}
              modalPrev={modalPrev}
              modalIndex={modalIndex}
            >
              {/**project Modal Set 에서 값 prop으로 받아와서 저장하기, 이후 my account 리셋 */}
            </ProjectModalSet>

          :
          null
        }
        {
          projectEditModal ==true?
            <ProjectEditModalSet 
              closeModal={closeModal}
              modalNext={modalNext}
              modalPrev={modalPrev}
              modalIndex={modalIndex}
              projectEditNum={projectEditNum}
            >
              {/**project Modal Set 에서 값 prop으로 받아와서 저장하기, 이후 my account 리셋 */}
            </ProjectEditModalSet>

          :
          null
        }
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
