import axios from "axios";
import MyProjectCard from "./MyProjectCard";
import { useEffect, useState } from "react";

const MyProject = (props) => {
  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용

  const openModal = function () {
    props.openModal();
  }
  
  let myProjectData = props.myProjectData;
  return (
    <div className="myproject-form">
      <div style={{display:"flex",justifyContent: "space-between"}}>
        <div className="myproject-title mb-30">
          <h2>Suggestion List</h2>
          <h4>의뢰자에게 제안한 목록입니다.</h4>
        </div>
      </div>
      <div className="my-projects mt-20">
        <div className="my-project-card">
          <img src="" />
          <div className="prj-cont">
            <p>#1515 | 상위 카테고리 &#62; 하위 카테고리</p>
            <h3>제안 프로젝트1</h3>
            <h3>비용 : 500,000 원</h3>
          </div>
          <button className="prj-sts-btn">대기중</button>       
        </div>        
        <div className="my-project-card">
          <img src="" />
          <div className="prj-cont">
            <p>#1517 | 상위 카테고리 &#62; 하위 카테고리</p>
            <h3>제안 프로젝트2</h3>
            <h3>비용 : 750,000 원</h3>
          </div>
          <button className="prj-sts-btn">승인</button>       
        </div>        
        <div className="my-project-card">
          <img src="" />
          <div className="prj-cont">
            <p>#2023 | 상위 카테고리 &#62; 하위 카테고리</p>
            <h3>제안 프로젝트3</h3>
            <h3>비용 : 125,000 원</h3>
          </div>
          <button className="prj-sts-btn">거절</button>       
        </div>        
      </div>      
    </div>
  );
};

export default MyProject;
