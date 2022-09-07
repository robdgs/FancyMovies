import { memo } from "react";
import MainCard from "../MainCard";
import "./index.scss";

const TopRatedList = ({ cardData, nCards }) => {
  return (
    <div className="TopRatedList">
      <div className="TopRatedList__title">
        <h3>{cardData.title}</h3>
      </div>
      {[...Array(nCards)].map((i, ii) => (
        <MainCard
          cardData={cardData}
          cardStyle={{ width: "200px", height: "300px", fontSize: "16px" }}
          key={ii}
        />
      ))}
      <div className="TopRatedList__overview">
        {" "}
        {/* <p>{cardData.overview}</p>  */}
      </div>
    </div>
  );
};

export default memo(TopRatedList);
