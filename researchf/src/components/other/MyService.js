import axios from "axios";
import MyServiceCard from "./MyServiceCard";
import { useEffect, useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const MyProject = (props) => {
  //바꿔야할것
  //1. variation 설정하기
  //2. image 첨부하기
  //3. product_id와 idx 구분하여 increment 하기
  //4. price 분기해서 기본price는 최소~최대값, variation은 각각 값 넣기(variation 값 외에 제목 등 다 분기하기)
  //5. 카테고리도 분기하기
  //6. 태그 넣을거야?

  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용
  let [insertService, setInsertService] = useState(0);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputs,setInputs] = useState({
    id: "",
    sku: "",
    name: "",
    price: "",
    discount: "",
    offer_end: "",
    rating: "",
    sale_count: "",
    seller_id: "",
    regist_dt: "",
    update_dt: "",
    delete_yn: "",
    full_description: "",
    short_description: ""
  });
  const {id,sku,name,price,
    discount,offer_end, rating, 
    sale_count, seller_id, regist_dt,
    update_dt, delete_yn, full_description, short_description } = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const changeInsertService = function (param) {
    setInsertService(param);
  }  
  const numberCheck1 = (e) => {
    const {name, value} = e.target;
    // 숫자만 남기고 나머지는 제거
    const numericValue = value.replace(/[^0-9]/g, '');
    setInputValue1(numericValue);
    setInputs({
      ...inputs,
      [name]: numericValue
    });
  };
  const numberCheck2 = (e) => {
    const {name, value} = e.target;
    // 숫자만 남기고 나머지는 제거
    const numericValue = value.replace(/[^0-9]/g, '');
    setInputValue2(numericValue);
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const numberCheck3 = (e) => {
    const {name, value} = e.target;
    // 숫자만 남기고 나머지는 제거
    const numericValue = value.replace(/[^0-9]/g, '');
    setInputValue3(numericValue);
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const serviceInsertSubmit = async(e) => {
    e.preventDefault();
    let sessionStorage = window.sessionStorage;
    var userId = sessionStorage.getItem("loginId");
    try{
      const response = await axios.post(apiUrl+'/serviceInsert',{
        userId: userId,
        data: inputs
      }).then(function (response) {
        //console.log(response.data);
        alert("등록완료");
        window.location.href="/my-account";
        }).catch(function(error) {
        
        }).then(function () {
          //finally
        });;
      
    } catch(error){
      console.error(error);
    }
  }
  
  let myServiceData = props.myServiceData;
  return (
    <div className="myproject-form">
      {
        insertService==0?
        <div>
          <div style={{display:"flex",justifyContent: "space-between"}}>
            <div className="myproject-title mb-30">
              <h2>My Services</h2>
              <h4>전문가 서비스 목록</h4>
            </div>
            <button className="prj-sts-btn" style={{margin:"0"}} onClick={(e)=>{changeInsertService("1", e)}}>서비스 추가</button>
          </div>
          <div className="my-projects">
            {
              myServiceData.length>0 ?
              myServiceData.map((a,i)=>{           
                return (
                  <MyServiceCard data={myServiceData[i]} i={i} key={i} >
    
                  </MyServiceCard>
                )            
              })
              :
              <div className="my-project-card">
                <div className="prj-cont-empty">
                  <p></p>
                  <h3>등록된 서비스가 없습니다</h3>
                  <h3>서비스를 등록해주세요!</h3>
                </div>
                <button className="prj-sts-btn" onClick={(e)=>{changeInsertService("1", e)}}>서비스 추가하기</button>
              </div>
    
            }
            
          </div>
        </div>
      :
      null
      }
      {
        insertService>0?
        <div>
          <div style={{display:"flex",justifyContent: "space-between"}}>
            <div className="myproject-title mb-30">
              <h2>My Services</h2>
              <h4>서비스 등록</h4>
            </div>
            <button className="prj-sts-btn" style={{margin:"0"}} onClick={(e)=>{changeInsertService("0", e)}}>돌아가기</button>
          </div>
          <div className="my-service-menu">
            <button className="my-service-menu-btn" onClick={(e)=>{changeInsertService("1", e)}}>기본 정보</button>
            <button className="my-service-menu-btn" onClick={(e)=>{changeInsertService("2", e)}}>가격 설정</button>
            <button className="my-service-menu-btn" onClick={(e)=>{changeInsertService("3", e)}}>서비스 설명</button>
            {/* <button className="my-service-menu-btn">이미지</button> */}
          </div>
          <div className="my-projects" style={{height:"375px"}}>
            {
              insertService==1?
              <div>
                <div className="my-service-insert">
                  <div className="input-row">
                    <label><h4>제목</h4></label>
                    <input type="text" name="name" onChange={onChange} placeholder="프로젝트명을 입력하세요."/>
                  </div>
                  <div className="input-row">
                    <label><h4>카테고리</h4></label>
                    <select className="" >
                      <option value="" >상위 카테고리</option>
                      <option value="00">Service A</option>
                      <option value="01">Service B</option>
                      <option value="02">Service C</option>
                    </select>
                  </div>
                  <div className="input-row">
                    <label><h4></h4></label>
                    <select className="" >
                      <option value="" >하위 카테고리</option>
                      <option value="00">Service A</option>
                      <option value="01">Service B</option>
                      <option value="02">Service C</option>
                    </select>
                  </div>
                  
                </div> 
                <div className="service-insert-btn">
                  <button className="service-insert-next" onClick={(e)=>{changeInsertService("2", e)}}>다음</button>
                </div>   
              </div>
              : null
            }                  
            {
              insertService==2?
              <div>
                <div className="my-service-insert">
                  <div className="input-row">
                    <table className="table mb-0">
                    <colgroup>
                      <col width="17%" />
                      <col width="100px" />
                      <col width="100px" />
                      <col width="100px" />
                    </colgroup>
                      <thead>
                        <tr style={{textAlign:"center"}}>
                          <th></th>
                          <th>Standard</th>
                          <th>Deluxe</th>
                          <th>Premium</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>제목 *</h4></td>
                          <td><input type="text" name="sku" onChange={onChange} placeholder="프로젝트명을 입력하세요."/></td>
                          <td><input type="text" placeholder="프로젝트명을 입력하세요."/></td>
                          <td><input type="text" placeholder="프로젝트명을 입력하세요."/></td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>설명 *</h4></td>
                          <td><input type="text" name="short_description" onChange={onChange} placeholder="설명을 입력하세요."/></td>
                          <td><input type="text" placeholder="설명을 입력하세요."/></td>
                          <td><input type="text" placeholder="설명을 입력하세요."/></td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>금액<span style={{fontSize:"5px"}}>(VAT포함) </span>*</h4></td>
                          <td><input type="text" name="price" value={inputValue1} onChange={numberCheck1} placeholder="입력해주세요."/></td>
                          <td><input type="text" value={inputValue2} onChange={numberCheck2} placeholder="입력해주세요."/></td>
                          <td><input type="text" value={inputValue3} onChange={numberCheck3} placeholder="입력해주세요."/></td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>작업 기간 *</h4></td>
                          <td><input type="text" placeholder="입력해주세요."/></td>
                          <td><input type="text" placeholder="입력해주세요."/></td>
                          <td><input type="text" placeholder="입력해주세요."/></td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>수정 횟수 *</h4></td>
                          <td><input type="text" placeholder="입력해주세요."/></td>
                          <td><input type="text" placeholder="입력해주세요."/></td>
                          <td><input type="text" placeholder="입력해주세요."/></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>                  
                </div> 
                <div className="service-insert-btn">
                  <button className="service-insert-prev" onClick={(e)=>{changeInsertService("1", e)}} >이전</button>
                  <button className="service-insert-next" onClick={(e)=>{changeInsertService("3", e)}}>다음</button>
                </div>   
              </div>
              : null
            } 
            {
              insertService==3?
              <div>
                <div className="my-service-insert">
                  <div className="input-row">
                    <label><h4>서비스 설명</h4></label>
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>서비스 설명을 입력해주세요.</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            //console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            //console.log( { event, editor, data } );
                            console.log(data);
                            setInputs({
                              ...inputs,"full_description": data
                            });
                        } }
                        onBlur={ ( event, editor ) => {
                            //console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            //console.log( 'Focus.', editor );
                        } }
                    />
                  </div>

                </div> 
                <div className="service-insert-btn">
                  <button className="service-insert-prev" onClick={(e)=>{changeInsertService("2", e)}}>이전</button>
                  <button className="service-insert-next" onClick={serviceInsertSubmit}>제출</button>
                </div>   
              </div>
              : null
            }               
          </div>
        </div>
      :
      null
      }
    </div>
  );
};

export default MyProject;
