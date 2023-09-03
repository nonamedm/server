const MyProjectCard = (props) => {
  //console.log(props.data);
  return (
    <div className="my-project-card">
      <img src="" />
      <div className="prj-cont">
        <p>#{props.data.IDX} | {props.data.CATEGORY1} &#62; {props.data.CATEGORY2}</p>
        <h3>{props.data.POSITION_NM}</h3>
        <h3>비용 : {props.data.DETAIL_PRICE} 원</h3>
      </div>
      
        {
          props.data.APPROVAL_STATUS == 0 ? 
          <button className="prj-sts-btn">승인대기중</button> 
          : <button className="prj-sts-btn">승인완료</button>
        }
      
      <button className="prj-more-btn">...</button>
    </div>
  );
};

export default MyProjectCard;
