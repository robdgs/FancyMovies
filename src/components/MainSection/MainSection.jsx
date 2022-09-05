import { useState, useEffect, memo } from "react";
import TopRatedList from "../TopRatedList";
import { GET } from "../../utils/api";
import "./index.scss";

const MainSection = () => {
  const [movieLists, setMovieLists] = useState({});

  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, topRated: data.results }))
    );

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, []);

  //console.log(movieLists.popular);

  return (
    <div id="main-section" className="MainSection">
      <h1>TOP RATED</h1>
      <div className="MainSection__imgContainer">
        {/* {movieLists.popular && <MainCard cardData={movieLists?.popular[0]} />} */}
        {/*  il ? prima del . pone la domanda "esiste?" se esiste allora procede. */}
        {movieLists?.topRated?.length >= 1 ? (
          movieLists.topRated.map((serie) => (
            <TopRatedList cardData={serie} nCards={1} key={serie.id} />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
      <h1 className="MainSection_topRated">NEW TITLES</h1>
      <div id="top-rated" className="MainSection__imgContainer">
        {movieLists?.popular?.length >= 1 ? (
          movieLists.popular.map((serie) => (
            <TopRatedList cardData={serie} nCards={1} key={serie.id} />
          ))
        ) : (
          <p>loading</p>
        )}
      </div>
    </div>
  );
};

export default memo(MainSection);
