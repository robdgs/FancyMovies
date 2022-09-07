import { memo } from "react";
import MainCard from "../MainCard";
import styles from './index.module.scss';

const TopRatedList = ({ cardData, nCards }) => {
  return (
    <div className={styles.TopRated}>
      <div className={styles.title}>
        <h3>{cardData.title}</h3>
      </div>
      {[...Array(nCards)].map((i, ii) => (
        <MainCard
          cardData={cardData}
          cardStyle={{ width: "200px", height: "300px", fontSize: "16px" }}
          key={ii}
        />
      ))}
      <div className={styles.overview}>
        {" "}
        {/* <p>{cardData.overview}</p>  */}
      </div>
    </div>
  );
};

export default memo(TopRatedList);
