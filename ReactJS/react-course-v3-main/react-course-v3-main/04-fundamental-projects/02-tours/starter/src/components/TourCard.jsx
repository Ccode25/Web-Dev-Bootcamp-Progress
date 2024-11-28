import React from "react";
import { useState } from "react";

const TourCard = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} className="img" />
      <span className="tour-price">
        <p>${tour.price}</p>
      </span>

      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>
          {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>

        <button
          onClick={() => removeTour(tour.id)}
          className="delete-btn btn-block btn"
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default TourCard;
