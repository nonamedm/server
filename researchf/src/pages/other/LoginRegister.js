import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from 'axios';

const LoginRegister = () => {
  let { pathname } = useLocation();
  const [formData, setFormData] = useState({});


  const loginSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('/login',formData);
      // console.log(response.data);
      if(response.data.msg==1) {
        alert("이메일을 확인해 주세요.");
      } else if(response.data.msg==2) {
        alert("비밀번호를 확인해 주세요.");
      } else {
        alert(response.data.userName+"님 반갑습니다!");
        let sessionStorage = window.sessionStorage;
        sessionStorage.setItem("loginId", response.data.userId);
        sessionStorage.setItem("loginName", response.data.userName);
        window.location.href="/";

      }
    } catch(error){
      console.error(error);
    }
  }

  const registerSubmit = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('/register',formData);
      console.log(response.data);
      if(response.data==1) {
        alert("이미 가입된 이메일입니다.");
      } else if(response.data==2) {
        alert("오류가 발생했습니다. 관리자에게 문의하세요.");
      } else {
        alert("회원가입이 완료되었습니다!");
        window.location.reload();
      }
    } catch(error){
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Login Register", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form method="POST" action="" onSubmit={loginSubmit}>
                              <input
                                type="text"
                                name="userMail"
                                placeholder="User Email"
                                onChange={handleInputChange}
                              />
                              <input
                                type="password"
                                name="userPasswd"
                                placeholder="Password"
                                onChange={handleInputChange}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form method="POST" action="" onSubmit={registerSubmit}>
                              <input
                                name="email"
                                placeholder="Email"
                                type="email"
                                onChange={handleInputChange}
                              />
                              <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleInputChange}
                              />
                              <input
                                type="password"
                                name="passwordchk"
                                placeholder="Password Check"
                                onChange={handleInputChange}
                              />
                              <input
                                type="text"
                                name="job"
                                placeholder="User Job"
                                onChange={handleInputChange}
                              />
                              <input
                                type="text"
                                name="biz"
                                placeholder="Business Type"
                                onChange={handleInputChange}
                              />

                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
