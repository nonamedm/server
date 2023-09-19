import axios from "axios";
import { useState } from "react";

const MyProjectCard = (props) => {
  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용

  let [editBoxModal, setEditBoxModal] = useState(false);
  
  const editProject = function (idx) {
    props.openEditModal(idx);
    setEditBoxModal(false);
  }
  const deleteProject = function (idx) {
    let sessionStorage = window.sessionStorage;
    var loginId = sessionStorage.getItem("loginId");

    axios.post(apiUrl+'/deleteProject',{
      idx: idx,
      userId: loginId
    }).then(function (response) {
      console.log(response);
      alert("삭제완료");
      window.location.href="/my-account";
      
    }).catch(function(error) {
    
    }).finally(function (e){
      //console.log(e);
    });
  }
  const onEditBoxModal = function () {
    editBoxModal==true?setEditBoxModal(false):setEditBoxModal(true);
  }

  //console.log(props.data);
  return (
    <>
      <div className="my-project-card">
        <img src="/assets/img/product/accessories/1.jpg" />
        <div className="prj-cont">
          <p>#{props.data.IDX} | {props.data.CATEGORY1} &#62; {props.data.CATEGORY2}</p>
          <h3>{props.data.POSITION_NM}</h3>
          <h3>비용 : {props.data.DETAIL_PRICE} 원</h3>
        </div>
        
          {
            props.data.APPROVAL_STATUS == 0 ? 
            <button className="prj-sts-btn">승인대기중</button> 
            : <button className="prj-sts-btn">승인완료</button>
          }
          <div className="prj-btn-box">
            <button className="prj-more-btn" onClick={onEditBoxModal}>
            ...
            </button>
            {
              editBoxModal==true?
              <div className="edit-box">
                <div onClick={() => editProject(props.data.IDX)}>편집</div>
                <div onClick={() => deleteProject(props.data.IDX)}>삭제</div>
              </div>
              :
              null
            }
          </div>
      </div>
    </>
  );
};

export default MyProjectCard;
