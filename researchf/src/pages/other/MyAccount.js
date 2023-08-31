import { Fragment, useState } from "react"; 
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import MyProject from "../../components/other/MyProject";
import MyAccountMenu from "../../components/other/MyAccountMenu";
import ProjectModalSet from "../../components/other/ProjectModalSet";

const MyAccount = () => {
  let { pathname } = useLocation();
  let [projectModal, setProjectModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(0);
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
                <MyAccountMenu></MyAccountMenu>
              </div>
              <div className="col-12 col-lg-9 col-md-8">
                <MyProject openModal={openModal}></MyProject>
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
