import React from "react";
import Tour from "./tour";
import Title from "./Title";

function FeaturedTour() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tour" />
      <Tour />
    </section>
  );
}

export default FeaturedTour;
