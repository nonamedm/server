import axios from "axios";
import MyProjectCard from "./MyProjectCard";
import { useEffect, useState } from "react";

const MyProject = (props) => {
  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용

  const openModal = function () {
    props.openModal();
  }
  
  let sessionStorage = window.sessionStorage;
  let [myProjectData,setMyProjectData] = useState([]);
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
    <div className="myproject-form">
      <div className="myproject-title mb-30">
        <h2>My Projects</h2>
      </div>
      <div className="my-projects">
        {
          myProjectData.length>0 ?
          myProjectData.map((a,i)=>{
            return (
              <MyProjectCard data={myProjectData[i]} i={i} key={i}>

              </MyProjectCard>
            )
          })
          :
          <div className="my-project-card">
            <div className="prj-cont-empty">
              <p></p>
              <h3>등록된 프로젝트가 없습니다</h3>
              <h3>의뢰하고 싶은 프로젝트를 등록해주세요!</h3>
            </div>
            <button className="prj-sts-btn" onClick={openModal}>프로젝트 의뢰하기</button>
          </div>

        }
        
      </div>
    </div>
  );
};

export default MyProject;
