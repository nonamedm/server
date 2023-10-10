import axios from "axios";
import MyServiceCard from "./MyServiceCard";
import { useEffect, useRef, useState } from "react";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { uploadFile } from './FileAPI';

const MyProject = (props) => {

  const editorRef = useRef();
  //바꿔야할것
  //1. variation 설정하기
  //2. image 첨부하기 -> 기본이미지는 완료, 추가이미지 필요
  //3. product_id와 idx 구분하여 increment 하기 -> 완료
  //4. price 분기해서 기본price는 최소~최대값, variation은 각각 값 넣기(variation 값 외에 제목 등 다 분기하기)
  //5. 카테고리도 분기하기 -> 완료
  //6. 태그 넣을거야?

  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용
  let [insertService, setInsertService] = useState(0);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [imgData, setImgData] = useState([]);
  const [imgData1, setImgData1] = useState();
  const [showImages1,setShowImages1] = useState("");
  const [file1,setFile1] = useState("");
  const [imgData2, setImgData2] = useState([]);
  const [showImages2,setShowImages2] = useState([]);
  const [file2,setFile2] = useState([]);
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
    category_a: "",
    category_b: "",
    full_description: "",
    short_description: "",
    type_name1: "",
    type_name2: "",
    type_name3: "",
    type_expln1: "",
    type_expln2: "",
    type_expln3: "",
    type_price1: "",
    type_price2: "",
    type_price3: "",
    type_lt1: "",
    type_lt2: "",
    type_lt3: "",
    type_mod_num1: "",
    type_mod_num2: "",
    type_mod_num3: ""
  });
  const {id,sku,name,price,
    discount,offer_end, rating, 
    sale_count, seller_id, regist_dt,
    update_dt, delete_yn, 
    category_a, category_b,
    full_description, short_description,
    type_name1,type_name2,type_name3,
    type_expln1,type_expln2,type_expln3,
    type_price1,type_price2,type_price3,
    type_lt1,type_lt2,type_lt3,
    type_mod_num1,type_mod_num2,type_mod_num3
    } = inputs;

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
        data: inputs,
        imgData1: imgData1,
        imgData2: imgData2
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


  useEffect(()=>{
    uploadFiles1();
  },[file1]);
  useEffect(()=>{
    uploadFiles2();
  },[file2]);
  // 이미지 상대경로 저장
  const handleAddImages1 = (event) => {
    const file = event.target.files[0];
    setFile1(event.target.files[0]);
    //console.log(event.target.files[0]);
    const currentImageUrl = URL.createObjectURL(file);
    setShowImages1(currentImageUrl);
  };
  const handleAddImages2 = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages2];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }
    setFile2(imageLists);
    setShowImages2(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage1 = (id) => {
    setShowImages1('');
  };
  const handleDeleteImage2 = (id) => {
    setShowImages2(showImages2.filter((_, index) => index !== id));
  };

  const uploadFiles1 = async(e) => {
    //e.preventDefault();
    const formData = new FormData();
    formData.append('file', file1);
    try{
      await uploadFile(formData).then(function (response) {
        //console.log("리턴",response);
        if(response.fileName.length>0){
          var fileName = response.fileName[0];
          var fileNameSplit = fileName.split(".");
          var filePath = response.files[0].path;
          var size = response.files[0].size;
          setImgData1({"name": fileNameSplit[0], "path": filePath, "ext": fileNameSplit[1], "size": size})
          //console.log(fileNameSplit);
        }
      }).finally(function (response) {

      });
      
    } catch(error){
      console.error(error);
    }
  }
  const uploadFiles2 = async(e) => {
    //e.preventDefault();
    //console.log(file2);
    for(let i=0; i<file2.length; i++) {
      const formData = new FormData();
      formData.append('file', file2[i]);
      try{
        await uploadFile(formData).then(function (response) {
          console.log("리턴",response);

          if(response.fileName.length>0){
            var fileName = response.fileName[0];
            var fileNameSplit = fileName.split(".");
            var filePath = response.files[0].path;
            var size = response.files[0].size;
            
            var copyData = imgData2;
            copyData.push({"name": fileNameSplit[0], "path": filePath, "ext": fileNameSplit[1], "size": size});
            setImgData2(copyData);
            // if(i!=0) {
            //   console.log("여기는2",i)
            // } else {
            //   console.log("여기는1",i)
            //   var copyData = {"name": fileNameSplit[0], "path": filePath, "ext": fileNameSplit[1], "size": size};
            //   setImgData2(copyData);
            // }
            //console.log(fileNameSplit);
          }
        }).finally(function (response) {
  
        });
        
      } catch(error){
        console.error(error);
      }
    }
  }

  const onUploadImage = async(blob, callback) => {
    const formData = new FormData();
    formData.append('file', blob);
    try{
      await uploadFile(formData).then(function (response) {
        //console.log("리턴",response);
        let url = '/assets/img/'+response.fileName[0];
        callback(url, '사진 대체 텍스트 입력');
      }).finally(function (response) {

      });
      
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
            <button className="my-service-menu-btn" onClick={(e)=>{changeInsertService("4", e)}}>이미지</button>
            {/* <button className="my-service-menu-btn">이미지</button> */}
          </div>
          <div className="my-projects" style={{height:"100%"}}>
            {
              insertService==1?
              <div>
                <div className="my-service-insert">
                  <div className="input-row">
                    <label><h4>제목</h4></label>
                    <input type="text" name="name" onChange={onChange} placeholder="프로젝트명을 입력하세요." value={inputs.name}/>
                  </div>
                  <div className="input-row">
                    <label><h4>카테고리</h4></label>
                    <select className="" name="category_a" onChange={onChange} value={inputs.category_a}>
                      <option value="" >상위 카테고리</option>
                      <option value="00">Service A</option>
                      <option value="01">Service B</option>
                      <option value="02">Service C</option>
                    </select>
                  </div>
                  <div className="input-row">
                    <label><h4></h4></label>
                    <select className="" name="category_b" onChange={onChange} value={inputs.category_b}>
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
                        <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet" /> 
                        <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
                        <script src=" https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/lang/summernote-ko-KR.min.js"></script>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>제목 *</h4></td>
                          <td><input type="text" name="type_name1" onChange={onChange} placeholder="프로젝트명을 입력하세요." value={inputs.type_name1}/></td>
                          <td><input type="text" name="type_name2" onChange={onChange} placeholder="프로젝트명을 입력하세요." value={inputs.type_name2}/></td>
                          <td><input type="text" name="type_name3" onChange={onChange} placeholder="프로젝트명을 입력하세요." value={inputs.type_name3}/></td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>설명 *</h4></td>
                          <td>
                            <textarea name="type_expln1" onChange={onChange} placeholder="설명을 입력하세요." value={inputs.type_expln1}/>
                          </td>
                          <td>
                            <textarea name="type_expln2" onChange={onChange} placeholder="설명을 입력하세요." value={inputs.type_expln2}/>
                          </td>
                          <td>
                            <textarea name="type_expln3" onChange={onChange} placeholder="설명을 입력하세요." value={inputs.type_expln3}/>
                          </td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>금액<span style={{fontSize:"5px"}}>(VAT포함) </span>*</h4></td>
                          <td><input type="text" name="type_price1" value={inputValue1} onChange={numberCheck1} placeholder="입력해주세요."/></td>
                          <td><input type="text" name="type_price2" value={inputValue2} onChange={numberCheck2} placeholder="입력해주세요."/></td>
                          <td><input type="text" name="type_price3" value={inputValue3} onChange={numberCheck3} placeholder="입력해주세요."/></td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>작업 기간 *</h4></td>
                          <td><input type="text" name="type_lt1" placeholder="입력해주세요." onChange={onChange} value={inputs.type_lt1}/></td>
                          <td><input type="text" name="type_lt2" placeholder="입력해주세요." onChange={onChange} value={inputs.type_lt2}/></td>
                          <td><input type="text" name="type_lt3" placeholder="입력해주세요." onChange={onChange} value={inputs.type_lt3}/></td>
                        </tr>
                        <tr>
                          <td style={{verticalAlign:"middle"}}><h4>수정 횟수 *</h4></td>
                          <td><input type="text" name="type_mod_num1" placeholder="입력해주세요." onChange={onChange} value={inputs.type_mod_num1}/></td>
                          <td><input type="text" name="type_mod_num2" placeholder="입력해주세요." onChange={onChange} value={inputs.type_mod_num2}/></td>
                          <td><input type="text" name="type_mod_num3" placeholder="입력해주세요." onChange={onChange} value={inputs.type_mod_num3}/></td>
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
                    <Editor
                      initialValue={inputs.full_description==""?"서비스 설명을 입력해주세요!":inputs.full_description}
                      previewStyle="vertical"
                      height="300px"
                      initialEditType="wysiwyg"
                      useCommandShortcut={false}
                      plugins={[colorSyntax]}
                      ref={editorRef}
                      language="ko-KR"
                      onChange={ () => {
                        const data = editorRef.current.getInstance().getHTML();
                        setInputs({
                          ...inputs,"full_description": data
                        });
                      }}
                      hooks={{
                        addImageBlobHook: onUploadImage
                      }}
                    />
                  </div>

                </div> 
                <div className="service-insert-btn">
                  <button className="service-insert-prev" onClick={(e)=>{changeInsertService("2", e)}}>이전</button>
                  <button className="service-insert-next" onClick={(e)=>{changeInsertService("4", e)}}>다음</button>
                </div>   
              </div>
              : null
            }               
            {
              insertService==4?
              <div>
                <div className="my-service-insert">
                  <div className="input-row">
                    <label><h4>이미지 등록</h4></label>
                    
                  </div>
                  <div className="my-service-image">
                    <p>리스트 이미지(필수)</p>
                    <div className="img-cont">
                      <label htmlFor="input-img1" onChange={handleAddImages1}>
                        이미지 추가
                        <input className="input-img" type="file" accept="image/*" id="input-img1" style={{display:"none"}} />
                      </label>

                      {/** 저장해둔 이미지들을 화면에 이미지 출력 */} 
                      <div className="">
                        {showImages1? 
                          <>
                            <img src={showImages1} />
                            <button className="btn-delete" onClick={handleDeleteImage1}>X</button>
                          </>
                          : null
                        }
                        {/* <Delete onClick={() => handleDeleteImage(id)} /> */}
                      </div>
                    </div>
                  </div> 
                  <div className="my-service-image">
                    <p>상세페이지 이미지</p>
                    <div className="img-cont">
                      <label htmlFor="input-img2" onChange={handleAddImages2}>
                        이미지 추가
                        <input className="input-img" type="file" accept="image/*" id="input-img2" style={{display:"none"}} multiple/>
                      </label>

                      {/** 저장해둔 이미지들을 순회하면서 화면에 이미지 출력 */} 
                      {showImages2.map((image, id) => (
                        <div className="" key={id}>
                          <>
                          <img src={image} alt={`${image}-${id}`} />
                          <button className="btn-delete" onClick={(e)=>{handleDeleteImage2(id)}}>X</button>
                          </>
                          {/* <Delete onClick={() => handleDeleteImage(id)} /> */}
                        </div>
                      ))}
                    </div>
                  </div> 
                </div> 
                <div className="service-insert-btn">
                  <button className="service-insert-prev" onClick={(e)=>{changeInsertService("3", e)}}>이전</button>
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
