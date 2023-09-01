import { useState } from "react";
import axios from 'axios';

const ProjectModalSet = (props) => {
  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용

  const [inputValue, setInputValue] = useState('');
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
    detail_cont: "",
    detail_price: ""
  });

  const {outsourcing_yn,stay_yn,budget,gov_support,
          category1,category2, position_nm, 
          personal_yn, corp_yn, personal_nm,
          now_status1, detail_cont, detail_price } = inputs;

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
    try{
      const response = await axios.post(apiUrl+'/projectRequest',{
        userId: userId,
        data: inputs
      });
      
      // if(response.data==1) {
      //   alert("이미 가입된 이메일입니다.");
      // } else if(response.data==2) {
      //   alert("오류가 발생했습니다. 관리자에게 문의하세요.");
      // } else {
      //   alert("회원가입이 완료되었습니다!");
      //   window.location.reload();
      // }
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
            <input type="checkbox" name="outsourcing_yn" onChange={onChange}/>
            <span className="checkmark"></span>
          </label>
          <label className="round-check">
            <h4>상주</h4>
            정해진 기간, 장소에 따라 작업할 인력 구인
            <input type="checkbox" name="stay_yn" onChange={onChange}/>
            <span className="checkmark"></span>
          </label>
          <div className="project-modal-box">
              <h4 className="project-modal-h4">사용 가능한 예산 범위 선택</h4>
              <p>정부지원금일 경우 총 사업비 범위를 선택해주세요.</p>
              <div style={{display:"flex"}}>
                <input type="radio" name="budget" onChange={onChange} value="1"/>
                <h4 style={{margin:"10px"}}>500만원 미만</h4>
                <input type="radio" name="budget" onChange={onChange} value="2"/>
                <h4 style={{margin:"10px"}}>500만원 이상</h4>
              </div>
          </div>
          <label className="round-check">
            
            정부지원금 사용 시, 체크해주세요
            <input type="checkbox" name="gov_support" onChange={onChange}/>
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
                <select className="project-modal-select" name="category1" onChange={onChange}>
                  <option value="" >상위 카테고리</option>
                  <option value="00">Service A</option>
                  <option value="01">Service B</option>
                  <option value="02">Service C</option>
                </select>
                <select className="project-modal-select" name="category2" onChange={onChange}>
                  <option value="" >하위 카테고리</option>
                  <option value="00">Service A</option>
                  <option value="01">Service B</option>
                  <option value="02">Service C</option>
                </select>
              </div>
              <div className="project-modal-text">
                <h4 className="project-modal-h4">프리랜서 포지션 제목을 입력해주세요.</h4>
                <textarea className="project-modal-cont" name="position_nm" onChange={onChange}></textarea>
              </div>
              <div className="project-modal-text">
                <h4 className="project-modal-h4">개인/기업 여부를 선택해 주세요.</h4>
                <div style={{display:"flex"}}>
                  <input type="radio" name="personal_yn" onChange={onChange}/>
                  <p style={{margin:"10px"}}>개인(프리랜서)</p>
                  <input type="radio" name="corp_yn" onChange={onChange}/>
                  <p style={{margin:"10px"}}>기업(법인/개인사업자/예비창업자)</p>
                </div>
                <input type="text" placeholder="개인/기업명 입력(*사이트에 노출되지 않음)" name="personal_nm" onChange={onChange} />
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
                  <input type="radio" name="now_status1" onChange={onChange}/>
                  <p style={{margin:"10px",width: "160px"}}>아이디어만 있음</p>
                  <input type="radio" name="now_status1" onChange={onChange}/>
                  <p style={{margin:"10px",width: "210px"}}>필요한 내용들을 간단히 정리해둠</p>
                </div>
                <div style={{display:"flex"}}>
                  <input type="radio" name="now_status1" onChange={onChange}/>
                  <p style={{margin:"10px",width: "160px"}}>상세한 기획 문서가 있음</p>
                  <input type="radio" name="now_status1" onChange={onChange}/>
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
                  - 기타"></textarea>
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
                  placeholder="숫자만 입력하세요" name="detail_price"
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

export default ProjectModalSet;
