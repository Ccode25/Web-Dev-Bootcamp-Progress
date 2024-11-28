import React from "react";
import TourCard from "./TourCard";

const Tours = ({ tourData, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
      </div>
      <div className="tours">
        {tourData.map((tour) => (
          <div key={tour.id}>
            <TourCard tour={{ ...tour }} removeTour={removeTour} />
          </div>
        ))}
      </div>
    </section>
  );
  x;
};

export default Tours;
