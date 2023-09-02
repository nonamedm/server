import axios from "axios";
import { useEffect, useState } from "react";

const MyAccountMenuDetail = (props) => {
  // var apiUrl = "http://localhost:8001"; //개발서버용
  var apiUrl = ""; //운영서버용

  let sessionStorage = window.sessionStorage;
  let [myProjectData,setMyProjectData] = useState(props.myProjectData);
  let [myProjectCnt,setMyProjectCnt] = useState([{CNT0:0,CNT1:0,CNT2:0,CNT3:0}]);
  var loginId = sessionStorage.getItem("loginId");
  const projectClick = (params,e)=>{
    props.setMyAccountMenuName("myProjects");
    props.setMyProjectList(params);
  }
  const myAccountMenuName = (params,e)=>{
    props.setMyAccountMenuName(params);
    props.setMyProjectList(9);
  }

  
  useEffect(() => {
    if(loginId!=null){
      axios.post(apiUrl+'/myProjectListCnt',{
        userId: loginId
      }).then(function (response) {
        //console.log(response.data);
        setMyProjectCnt(response.data);
        }).catch(function(error) {
        
        }).then(function () {
          //finally
        });
    } else {
      //console.log('로그인안됨');
    }
  }, []);

  return (    
    <div>
      <div className="single-my-account mb-20">
        <div className="single-my-account mb-20">
          <h2 className="panel-heading">                          
            <p href="" onClick={(e)=>{myAccountMenuName("myProjects", e)}}>My Projects </p>                         
          </h2>
          <p className="panel-second" onClick={(e)=>{projectClick("9", e)}}>Overall ({props.myProjectData.length})</p>
          <p className="panel-second" onClick={(e)=>{projectClick("0", e)}}>Waiting for approval ({myProjectCnt[0].CNT0})</p>
          <p className="panel-second" onClick={(e)=>{projectClick("1", e)}}>Requesting ({myProjectCnt[0].CNT1})</p>
          <p className="panel-second">Closing ({myProjectCnt[0].CNT2})</p>
          <p className="panel-second">Not approved ({myProjectCnt[0].CNT3})</p>
        </div>
      </div>


      <div className="single-my-account mb-20">
        <div className="single-my-account mb-20">
          <h2 className="panel-heading">
            <p href="" onClick={(e)=>{myAccountMenuName("purchase", e)}}>Purchase</p>
          </h2>
        </div>
      </div>

      <div className="single-my-account mb-20">
        <div className="single-my-account mb-20">
          <h2 className="panel-heading">
            <p href="" style={{cursor:"default", color:"#c8c8c8"}}>Cash(준비중)</p>                            
          </h2>
        </div>
      </div>

      <div className="single-my-account mb-20">
        <div className="single-my-account mb-20">
          <h2 className="panel-heading">
            <p href="" style={{cursor:"default", color:"#c8c8c8"}}>Recharge Cash(준비중)</p>                            
          </h2>
        </div>
      </div>

      <div className="single-my-account mb-20">
        <div className="single-my-account mb-20">
          <h2 className="panel-heading">
            <p href="" style={{cursor:"default", color:"#c8c8c8"}}>Coupon(준비중)</p>                            
          </h2>
        </div>
      </div>
      <div className="single-my-account mb-20">
        <div className="single-my-account mb-20">
          <h2 className="panel-heading">
            <p href="" style={{cursor:"default", color:"#c8c8c8"}}>Payment details(준비중)</p>                            
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MyAccountMenuDetail;
