import MyAccountMenuDetailUser from "./MyAccountMenuDetailUser";

const MyAccountMenuDetail = () => {
  let sessionStorage = window.sessionStorage;
  var loginId = sessionStorage.getItem("loginId");

  return (    
    <MyAccountMenuDetailUser></MyAccountMenuDetailUser>
  );
};

export default MyAccountMenuDetail;
