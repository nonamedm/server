import axios from "axios";
import MyProjectCard from "./MyProjectCard";
import { useEffect, useState } from "react";

const MyProject = () => {
  var apiUrl = "http://localhost:8001"; //개발서버용
  // var apiUrl = ""; //운영서버용
  
  let sessionStorage = window.sessionStorage;
  let [myProjectData,setMyProjectData] = useState([]);
  var loginId = sessionStorage.getItem("loginId");

    useEffect(() => {
      axios.post(apiUrl+'/myProjectList',{
          userId: loginId
        }).then(function (response) {
          //console.log(response.data);
          setMyProjectData(response.data);
        }).catch(function(error) {
        
        }).then(function () {
          //finally
        });
    }, []);

  return (
    <div className="myproject-form">
      <div className="myproject-title mb-30">
        <h2>My Projects</h2>
      </div>
      <div className="my-projects">
        {
          myProjectData.map((a,i)=>{
                          return (
                            <MyProjectCard data={myProjectData[i]} i={i} key={i}>

                            </MyProjectCard>
                          )
                        })
        }
        
      </div>
    </div>
  );
};

export default MyProject;
