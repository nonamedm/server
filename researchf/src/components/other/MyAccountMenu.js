import MyAccountMenuDetail from "./MyAccountMenuDetail";

const MyAccountMenu = (props) => {

  return (
    <div className="myaccount-menu-wrap">
      <div className="mypage-header"><h2>My Page</h2>
      </div>
      <MyAccountMenuDetail
        myProjectData={props.myProjectData}
        setMyProjectList={props.setMyProjectList}
        setMyAccountMenuName={props.setMyAccountMenuName}
      >
        
      </MyAccountMenuDetail>
    </div>
  );
};

export default MyAccountMenu;
