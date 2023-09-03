const MyServiceCard = (props) => {
  //console.log(props.data);
  return (
    <div className="my-project-card">
      <img src="" />
      <div className="prj-cont">
        <p>#{props.data.IDX} | {props.data.CATEGORY}</p>
        <h3>{props.data.NAME}</h3>
        <h3>비용 : {props.data.PRICE} 원</h3>
      </div>
      <div className="service-btn">
          {/* <button className="prj-sts-btn">편집</button> 
          <button className="prj-sts-btn">삭제</button> */}
          <button className="prj-sts-btn">...</button>
      </div>
    </div>
  );
};

export default MyServiceCard;
