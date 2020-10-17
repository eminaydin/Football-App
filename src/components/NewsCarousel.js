import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { fetchFootballNews } from "../helpers/fetchFunctions";
import { useDispatch, useSelector } from "react-redux";
import { Placeholder } from "semantic-ui-react";
const NewsCarousel = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.newsReducer.generalNews);
  const [loading, setLoading] = useState(false);

  const uniqueNews = state?.filter(
    (v, i, a) =>
      a.findIndex((t) => {
        return t.image === v.image;
      }) === i
  );
  useEffect(() => {
    setLoading(true);
    fetchFootballNews(`football AND english`, dispatch);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [dispatch]);
  return (
    <Carousel autoPlay>
      {uniqueNews?.map((news) => {
        return loading ? (
          <Placeholder fluid key={news.url}>
            <Placeholder.Image square />
          </Placeholder>
        ) : (
          <div key={news.url}>
            <img src={news.image} alt="news" />
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              <p className="legend">{news.title}</p>
            </a>
          </div>
        );
      })}
    </Carousel>
  );
};

export default NewsCarousel;
