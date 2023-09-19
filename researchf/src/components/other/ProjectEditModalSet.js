import { useEffect, useState } from "react";
import axios from 'axios';

const ProjectEditModalSet = (props) => {
  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용

  const [inputValue, setInputValue] = useState('0');
  const [inputs,setInputs] = useState({
    outsourcing_yn: "",
    stay_yn: "",
    budget: "",
    gov_support: "",
    category1: "",
    category2: "",
    position_nm: "",
    personal_yn: "",
    corp_yn: "",
    personal_nm: "",
    now_status1: "",
    now_status2: "",
    now_status3: "",
    now_status4: "",
    detail_cont: "",
    detail_price: ""
  });

  const {outsourcing_yn,stay_yn,budget,gov_support,
          category1,category2, position_nm, 
          personal_yn, corp_yn, personal_nm,
          now_status1, detail_cont, detail_price } = inputs;
  

  let sessionStorage = window.sessionStorage;
  var loginId = sessionStorage.getItem("loginId");
  var [resultData,setResultData] = useState([]);
  useEffect(() => {
    axios.post(apiUrl+'/editProject',{
      idx: props.projectEditNum,
      userId: loginId
    }).then(function (response) {
      //console.log(response.data.result[0]);
      setResultData(response.data.result[0]);

      //input 값 세팅하기
      setInputs({...inputs,
      outsourcing_yn: response.data.result[0].OUTSOURCING_YN,
      stay_yn: response.data.result[0].STAY_YN,
      budget: response.data.result[0].BUDGET,
      gov_support: response.data.result[0].GOV_SUPPORT,
      category1: response.data.result[0].CATEGORY1,
      category2: response.data.result[0].CATEGORY2,
      position_nm: response.data.result[0].POSITION_NM,
      personal_yn: response.data.result[0].PERSONAL_YN,
      corp_yn: "",
      personal_nm: response.data.result[0].PERSONAL_NM,
      now_status1: response.data.result[0].NOW_STATUS1,
      now_status2: "",
      now_status3: "",
      now_status4: "",
      detail_cont: response.data.result[0].DETAIL_CONT,
      detail_price: response.data.result[0].DETAIL_PRICE});
      
      setInputValue(response.data.result[0].DETAIL_PRICE);
      
      
    }).catch(function(error) {
    
    }).finally(function (e){
      //console.log(e);
    });
    
  }, []);
  const onChange = e => {
    const {name, value} = e.target;
    switch(e.target.type) {
      case "checkbox":
        setInputs({
          ...inputs,
          [name]: e.target.checked
        });
        break;
      default :
        setInputs({
          ...inputs,
          [name]: value
        });
        break;
    }
  }
  const numberCheck = (e) => {
    const {name, value} = e.target;
    // 숫자만 남기고 나머지는 제거
    const numericValue = value.replace(/[^0-9]/g, '');
    setInputValue(numericValue);
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const modalSubmit = async(e) => {
    e.preventDefault();
    let sessionStorage = window.sessionStorage;
    var userId = sessionStorage.getItem("loginId");
    var editIdx = resultData.IDX;
    try{
      const response = await axios.post(apiUrl+'/editProjectRequest',{
        userId: userId,
        data: inputs,
        editIdx : editIdx
      }).then(function (response) {
        //console.log(response.data);
        alert("등록완료");
        window.location.href="/my-account";
        }).catch(function(error) {
        
        }).then(function () {
          //finally
        });
      
    } catch(error){
      console.error(error);
    }
  }
  const closeModal = function () {
    props.closeModal();
  }
  const modalNext = function () {
    props.modalNext();
  }
  const modalPrev = function () {
    props.modalPrev();
  }

if(props.modalIndex==0) {
  return (
    <div>
      <div className="project-modal">
        <div className="project-modal-header">
          <h4>기본 정보 입력</h4>
          <button className="close-modal" onClick={closeModal}>x</button>
        </div>
        <div className="project-modal-content">
          <label className="round-check">
            <h4>외주(비상주)</h4>
            프리랜서 사업자와 계약
              <input type="checkbox" name="outsourcing_yn" onChange={onChange} checked={inputs.outsourcing_yn=='1'? true : null}/>
            <span className="checkmark"></span>
          </label>
          <label className="round-check">
            <h4>상주</h4>
            정해진 기간, 장소에 따라 작업할 인력 구인
              <input type="checkbox" name="stay_yn" onChange={onChange}  checked={inputs.stay_yn=='1'? true : null}/>              
            <span className="checkmark"></span>
          </label>
          <div className="project-modal-box">
              <h4 className="project-modal-h4">사용 가능한 예산 범위 선택</h4>
              <p>정부지원금일 경우 총 사업비 범위를 선택해주세요.</p>
              <div style={{display:"flex"}}>
                <input type="radio" name="budget" onChange={onChange} value="0" checked={inputs.budget=='0' ? true :  null}/>
                <h4 style={{margin:"10px"}}>500만원 미만</h4>
                <input type="radio" name="budget" onChange={onChange} value="1" checked={inputs.budget=='1' ? true :  null}/>
                <h4 style={{margin:"10px"}}>500만원 이상</h4>
              </div>
          </div>
          <label className="round-check">
            
            정부지원금 사용 시, 체크해주세요
              <input type="checkbox" name="gov_support" onChange={onChange} checked={inputs.gov_support=='1'? "true": null}/>
            <span className="checkmark"></span>
          </label>
          <button className="project-modal-next" onClick={modalNext}>다음</button>
        </div>
      </div>
      <div className="modal-back" onClick={closeModal}>

      </div>
    </div>
  )
} else if(props.modalIndex==1) {
  return (
    <div>
      <div className="project-modal">
        <div className="project-modal-header">
          <h4>필요한 업무 설명</h4>
          <button className="close-modal" onClick={closeModal}>x</button>
        </div>
        <div className="project-modal-content">
          <div className="project-modal-box">
              <h4 className="project-modal-h4">모집 분야를 선택해주세요</h4>
              <div className="project-modal-selectlabel">
                <select className="project-modal-select" name="category1" onChange={onChange} value={inputs.category1} defaultValue={""}>
                  <option value="" >상위 카테고리</option>
                  <option value="00" >Service A</option>
                  <option value="01">Service B</option>
                  <option value="02">Service C</option>
                </select>
                <select className="project-modal-select" name="category2" onChange={onChange} value={inputs.category2} defaultValue={""}>
                  <option value="" >하위 카테고리</option>
                  <option value="00">Service A</option>
                  <option value="01">Service B</option>
                  <option value="02">Service C</option>
                </select>
              </div>
              <div className="project-modal-text">
                <h4 className="project-modal-h4">프리랜서 포지션 제목을 입력해주세요.</h4>
                <textarea className="project-modal-cont" name="position_nm" onChange={onChange} value={inputs.position_nm} defaultValue={""}></textarea>
              </div>
              <div className="project-modal-text">
                <h4 className="project-modal-h4">개인/기업 여부를 선택해 주세요.</h4>
                <div style={{display:"flex"}}>
                  <input type="radio" name="personal_yn" onChange={onChange} value="0" checked={inputs.personal_yn==0? true : null}/>
                  <p style={{margin:"10px"}}>개인(프리랜서)</p>
                  <input type="radio" name="personal_yn" onChange={onChange} value="1" checked={inputs.personal_yn==1? true : null}/>
                  <p style={{margin:"10px"}}>기업(법인/개인사업자/예비창업자)</p>
                </div>
                <input type="text" placeholder="개인/기업명 입력(*사이트에 노출되지 않음)" name="personal_nm" onChange={onChange} value={inputs.personal_nm} defaultValue={""}/>
              </div>
          </div>
          <button className="project-modal-prev" onClick={modalPrev}>이전</button>
          <button className="project-modal-next" onClick={modalNext}>다음</button>
        </div>
      </div>
      <div className="modal-back" onClick={closeModal}>

      </div>
    </div>
  )
} else if(props.modalIndex==2) {
  return (      
    <div>
      <div className="project-modal">
        <div className="project-modal-header">
          <h4>필요한 업무 설명</h4>
          <button className="close-modal" onClick={closeModal}>x</button>
        </div>
        <div className="project-modal-content">
          <div className="project-modal-box">
              
              <div className="project-modal-text">
                <h4 className="project-modal-h4">기획 상태를 선택해주세요.</h4>
                <div style={{display:"flex"}}>
                  <input type="radio" name="now_status1" onChange={onChange} checked={inputs.now_status1=="1"? true : null} value="1"/>
                  <p style={{margin:"10px",width: "160px"}}>아이디어만 있음</p>
                  <input type="radio" name="now_status1" onChange={onChange} checked={inputs.now_status1=="2"? true : null} value="2"/>
                  <p style={{margin:"10px",width: "210px"}}>필요한 내용들을 간단히 정리해둠</p>
                </div>
                <div style={{display:"flex"}}>
                  <input type="radio" name="now_status1" onChange={onChange} checked={inputs.now_status1=="3"? true : null} value="3"/>
                  <p style={{margin:"10px",width: "160px"}}>상세한 기획 문서가 있음</p>
                  <input type="radio" name="now_status1" onChange={onChange} checked={inputs.now_status1=="4"? true : null} value="4"/>
                  <p style={{margin:"10px",width: "210px"}}>현재 기획 문서를 만들고 있음</p>
                </div>
              </div>
          </div>
          <button className="project-modal-prev" onClick={modalPrev}>이전</button>
          <button className="project-modal-next" onClick={modalNext}>다음</button>
        </div>
      </div>
      <div className="modal-back" onClick={closeModal}>

      </div>
    </div>
  )
} else if(props.modalIndex==3) {
  return (      
    <div>
      <div className="project-modal">
        <div className="project-modal-header">
          <h4>필요한 업무 설명</h4>
          <button className="close-modal" onClick={closeModal}>x</button>
        </div>
        <div className="project-modal-content">
          <div className="project-modal-box">
              <div className="project-modal-text">
                <h4 className="project-modal-h4">프로젝트 내용에 대해 상세한 내용을 입력해 주세요.</h4>
                <textarea className="project-modal-cont" name="detail_cont" onChange={onChange} style={{height: "200px"}}
                  placeholder="예)
                  - 경력
                  - 포트폴리오설명
                  - 기타"
                  value={inputs.detail_cont} defaultValue={""}></textarea>
              </div>
          </div>
          <button className="project-modal-prev" onClick={modalPrev}>이전</button>
          <button className="project-modal-next" onClick={modalNext}>다음</button>
        </div>
      </div>
      <div className="modal-back" onClick={closeModal}>

      </div>
    </div>
  )

} else {
  return (      
    <div>
      <div className="project-modal">
        <div className="project-modal-header">
          <h4>필요한 업무 설명</h4>
          <button className="close-modal" onClick={closeModal}>x</button>
        </div>
        <div className="project-modal-content">
          <div className="project-modal-box">
              <div className="project-modal-text">
                <h4 className="project-modal-h4">비용을 입력해 주세요.</h4>
                <input
                  type="text"
                  value={inputValue}
                  onChange={numberCheck}
                  placeholder="숫자만 입력하세요" name="detail_price" defaultValue={""}
                />
              </div>
          </div>
          <button className="project-modal-prev" onClick={modalPrev}>이전</button>
          <button className="project-modal-next" onClick={modalSubmit}>의뢰하기</button>
        </div>
      </div>
      <div className="modal-back" onClick={closeModal}>

      </div>
    </div>
  )

}
};

export default ProjectEditModalSet;
