import { Fragment } from "react";
import {FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon} from "react-share";

function ShareProductModal({ show, onHide, productUrl, productName }) {
  const currentUrl = "http://localhost:3000"+productUrl;
  // console.log(currentUrl);
  
  return (
    <>
      <div className="fade modal-backdrop show" onClick={()=>{onHide()}}></div>
      <div className="share-content" style={{width:"300px", height:"200px", backgroundColor:"white", padding:"20px", position:"relative", top:"-60%", left:"-5%", zIndex: 1050}}>
        <div className="modal-header" style={{flexDirection: "row-reverse"}}><button type="button" className="btn-close" onClick={()=>{onHide()}}></button></div>
        {/* { productUrl}{ productName } */}
        <h4 style={{fontWeight: 600, textAlign:"center"}}>공유하기</h4>
        <FacebookShareButton style={{ marginRight: "20px" }} url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <FacebookMessengerShareButton style={{ marginRight: "20px" }} url={currentUrl}>
          <FacebookMessengerIcon size={48} round={true} borderRadius={24}></FacebookMessengerIcon>
        </FacebookMessengerShareButton>
        <TwitterShareButton style={{ marginRight: "20px" }} url={currentUrl}>
          <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
        <LineShareButton url={currentUrl}>
          <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
        </LineShareButton>
      </div>
    </>
  );
}

export default ShareProductModal;
