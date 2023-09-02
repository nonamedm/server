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
          <h2>Purchase</h2>
        </div>
      </div>
      <div className="purchase-status">
        <div className="purchase-status-card">
          <h4>진행중</h4>
          <p>10</p>
        </div>
        <div className="purchase-status-card">
          <h4>작업물 도착</h4>
          <p>3</p>
        </div>
        <div className="purchase-status-card">
          <h4>취소/문제해결</h4>
          <p>5</p>
        </div>
        <div className="purchase-status-card" style={{margin:0}}>
          <h4>구매확정</h4>
          <p>15</p>
        </div>

      </div>
      <div className="my-projects mt-20">
        {
          myProjectData.length>0 ?
          myProjectData.map((a,i)=>{
            if(props.myProjectList==9) {
              return (
                <MyProjectCard data={myProjectData[i]} i={i} key={i} >
  
                </MyProjectCard>
              )
            } else {
              if(props.myProjectList==myProjectData[i].APPROVAL_STATUS) {
                return (
                  <MyProjectCard data={myProjectData[i]} i={i} key={i} >
    
                  </MyProjectCard>
                )
              } else {
                
              }
            }
          })
          :
          <div className="my-project-card">
            <div className="prj-cont-empty">
              <p></p>
              <h3>구매내역이 없습니다.</h3>
            </div>
          </div>

        }
        
      </div>
      <h3>꼭 확인해 주세요!</h3>
      <ul>
        <li className="purchase-li">주문 금액에 대한 세금계산서는 거래 주체인 전문가가 직접 발행하며, 세금계산서 발행 가능한 사업자 전문가의 서비스 구매 시에만 신청하실 수 있습니다.</li>
        <li className="purchase-li">수수료에 대한 세금계산서는 관리자가 발행합니다.</li>
        <li className="purchase-li">세금계산서는 구매 확정일(거래 완료일) 기준으로 발행됩니다.</li>
        <li className="purchase-li">이벤트 쿠폰 사용 금액은 할인된 금액이기 때문에 세금계산서에 포함되지 않습니다.</li>
        <li className="purchase-li">거래명세서는 결제가 완료되었음을 증명하는 용도로만 활용 가능하며 세무상의 지출증빙 효력이 없습니다.</li>
        <li className="purchase-li">현금영수증은 개인의 소득공제용으로만 사용 가능하며, 결제 당시 지출 증빙용으로 선택하셨더라도 매입세액공제를 받으실 수 없습니다.</li>
        <li className="purchase-li">자세한 내용은 [자주 묻는 질문 - 구매 및 영수증] 항목을 참고해주세요.</li>
      </ul>
    </div>
  );
};

export default MyProject;
