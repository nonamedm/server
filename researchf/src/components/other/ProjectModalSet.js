import { useState } from "react";

const ProjectModalSet = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    // 숫자만 남기고 나머지는 제거
    const numericValue = value.replace(/[^0-9]/g, '');
    setInputValue(numericValue);
  };

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
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <label className="round-check">
              <h4>상주</h4>
              정해진 기간, 장소에 따라 작업할 인력 구인
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            <div className="project-modal-box">
                <h4 className="project-modal-h4">사용 가능한 예산 범위 선택</h4>
                <p>정부지원금일 경우 총 사업비 범위를 선택해주세요.</p>
                <div style={{display:"flex"}}>
                  <input type="radio" name="budget"/>
                  <h4 style={{margin:"10px"}}>500만원 미만</h4>
                  <input type="radio" name="budget"/>
                  <h4 style={{margin:"10px"}}>500만원 이상</h4>
                </div>
            </div>
            <label className="round-check">
              
              정부지원금 사용 시, 체크해주세요
              <input type="checkbox"/>
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
                  <select className="project-modal-select" name="category1">
                    <option value="" >상위 카테고리</option>
                    <option value="00">Service A</option>
                    <option value="01">Service B</option>
                    <option value="02">Service C</option>
                  </select>
                  <select className="project-modal-select" name="category1">
                    <option value="" >하위 카테고리</option>
                    <option value="00">Service A</option>
                    <option value="01">Service B</option>
                    <option value="02">Service C</option>
                  </select>
                </div>
                <div className="project-modal-text">
                  <h4 className="project-modal-h4">프리랜서 포지션 제목을 입력해주세요.</h4>
                  <textarea className="project-modal-cont"></textarea>
                </div>
                <div className="project-modal-text">
                  <h4 className="project-modal-h4">개인/기업 여부를 선택해 주세요.</h4>
                  <div style={{display:"flex"}}>
                    <input type="radio" name="budget"/>
                    <p style={{margin:"10px"}}>개인(프리랜서)</p>
                    <input type="radio" name="budget"/>
                    <p style={{margin:"10px"}}>기업(법인/개인사업자/예비창업자)</p>
                  </div>
                  <input type="text" placeholder="개인/기업명 입력(*사이트에 노출되지 않음)" />
                </div>
            </div>
            <button className="project-modal-next" onClick={modalPrev}>이전</button>
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
                    <input type="radio" name="budget"/>
                    <p style={{margin:"10px",width: "160px"}}>아이디어만 있음</p>
                    <input type="radio" name="budget"/>
                    <p style={{margin:"10px",width: "210px"}}>필요한 내용들을 간단히 정리해둠</p>
                  </div>
                  <div style={{display:"flex"}}>
                    <input type="radio" name="budget"/>
                    <p style={{margin:"10px",width: "160px"}}>상세한 기획 문서가 있음</p>
                    <input type="radio" name="budget"/>
                    <p style={{margin:"10px",width: "210px"}}>현재 기획 문서를 만들고 있음</p>
                  </div>
                </div>
            </div>
            <button className="project-modal-next" onClick={modalPrev}>이전</button>
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
                  <textarea className="project-modal-cont" style={{height: "200px"}}
                   placeholder="예)
                    - 경력
                    - 포트폴리오설명
                    - 기타"></textarea>
                </div>
            </div>
            <button className="project-modal-next" onClick={modalPrev}>이전</button>
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
                    onChange={handleInputChange}
                    placeholder="숫자만 입력하세요"
                  />
                </div>
            </div>
            <button className="project-modal-next" onClick={modalPrev}>이전</button>
            <button className="project-modal-next" onClick={modalNext}>의뢰하기</button>
          </div>
        </div>
        <div className="modal-back" onClick={closeModal}>

        </div>
      </div>
    )

  }
};

export default ProjectModalSet;
