import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const PortfolioDetail = ({ portfolioDetail, portfolioIdx }) => {
  console.log("전달받음",portfolioDetail,": ",portfolioIdx);
  return (
    <div className="portfolio-detail">
      <div className="portfolio-heading">
        <div>전문가 이미지</div>
        <div></div>
        <div>문의하기</div>
      </div>
      <div className="portfolio-body">
        <div className="portfolio-left">왼쪽(상세텍스트)</div>
        <div className="portfolio-right">오른쪽(이미지들 나열)</div>
      </div>
      <div className="portfolio-footer">다른 포트폴리오 리스트</div>
    </div>
  );
};

export default PortfolioDetail;
