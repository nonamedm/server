import axios from "axios";
import { Fragment, useEffect, useState } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import MyProject from "../../components/other/MyProject";
import Purchase from "../../components/other/Purchase";
import MyAccountMenu from "../../components/other/MyAccountMenu";
import ProjectModalSet from "../../components/other/ProjectModalSet";

const MyAccount = () => {
  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용

  let { pathname } = useLocation();
  let [projectModal, setProjectModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(0);
  let [myProjectData,setMyProjectData] = useState([]);
  let [myProjectList,setMyProjectList] = useState(9);
  let [myAccountMenuName,setMyAccountMenuName] = useState("myProjects");

  const closeModal = function () {
    setProjectModal(false);
  }
  const openModal = function () {
    setProjectModal(true);
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
    axios.post(apiUrl+'/myProjectList',{
        userId: loginId
      }).then(function (response) {
        //console.log(response.data);
        setMyProjectData(response.data);
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
                  <MyProject openModal={openModal} myProjectData={myProjectData} myProjectList={myProjectList}></MyProject>
                  :
                  null
                }
                {
                  myAccountMenuName=="purchase"?
                  <Purchase openModal={openModal} myProjectData={myProjectData} myProjectList={myProjectList}></Purchase>
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
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
