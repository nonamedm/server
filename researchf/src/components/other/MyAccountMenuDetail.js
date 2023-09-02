import MyAccountMenuDetailUser from "./MyAccountMenuDetailUser";

const MyAccountMenuDetail = (props) => {

  return (    
    <MyAccountMenuDetailUser
      myProjectData={props.myProjectData}
      setMyProjectList={props.setMyProjectList}
      setMyAccountMenuName={props.setMyAccountMenuName}>
      
    </MyAccountMenuDetailUser>
  );
};

export default MyAccountMenuDetail;
