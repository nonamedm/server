import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { uploadFile } from './FileAPI';

const Portfolio = (props) => {

  const editorRef = useRef();

  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용
  let [insertService, setInsertService] = useState(0);
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

  // let myServiceData = props.myServiceData;

  return (
    <div className="myproject-form">
      {
        insertService==0?
        <div>
          <div style={{display:"flex",justifyContent: "space-between"}}>
            <div className="myproject-title mb-30">
              <h2>Portfolio</h2>
              <h4>전문가 포트폴리오 목록</h4>
            </div>
            <button className="prj-sts-btn" style={{margin:"0"}} onClick={(e)=>{changeInsertService("1", e)}}>포트폴리오 등록</button>
          </div>
          <div className="my-projects">
              <div className="my-project-card">
                <div className="prj-cont-empty">
                  <p></p>
                  <h3>등록된 포트폴리오가 없습니다</h3>
                  <h3>포트폴리오를 등록해주세요!</h3>
                </div>
                <button className="prj-sts-btn" onClick={(e)=>{changeInsertService("1", e)}}>포트폴리오 등록</button>
              </div>
            {
              // myServiceData.length>0 ?
              // myServiceData.map((a,i)=>{           
              //   return (
              //     <MyServiceCard data={myServiceData[i]} i={i} key={i} >
    
              //     </MyServiceCard>
              //   )            
              // })
              // :
              // <div className="my-project-card">
              //   <div className="prj-cont-empty">
              //     <p></p>
              //     <h3>등록된 서비스가 없습니다</h3>
              //     <h3>서비스를 등록해주세요!</h3>
              //   </div>
              //   <button className="prj-sts-btn" onClick={(e)=>{changeInsertService("1", e)}}>서비스 추가하기</button>
              // </div>
    
            }
            
          </div>
        </div>
        : ""
      }
      {
        insertService>0?
        <div>
          <div style={{display:"flex",justifyContent: "space-between"}}>
            <div className="myproject-title mb-30">
              <h2>Portfolio</h2>
              <h4>포트폴리오 등록</h4>
            </div>
            <button className="prj-sts-btn" style={{margin:"0"}} onClick={(e)=>{changeInsertService("0", e)}}>돌아가기</button>
          </div>
          <div className="my-projects" style={{height:"100%"}}>
            {
              insertService==1?
              <div>
                <div className="my-portf-insert">
                  <div className="input-row">
                    <label><h4>제목</h4></label>
                    <input type="text" name="name" onChange={onChange} placeholder="포트폴리오 제목을 입력하세요." value={inputs.name}/>
                  </div>
                  <div className="input-row">
                    <label><h4>고객사명</h4></label>
                    <input type="text" name="client" onChange={onChange} placeholder="설명을 입력하세요." value={inputs.client}/>
                  </div>
                  <div className="input-row">
                    <label><h4>작업기간</h4></label>
                    <input type="text" name="lt" onChange={onChange} placeholder="입력하세요." value={inputs.lt}/>
                  </div>                  
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
                </div>
                <div className="service-insert-btn">
                  <button className="service-insert-prev" onClick={(e)=>{changeInsertService("0", e)}}>이전</button>
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

export default Portfolio;
