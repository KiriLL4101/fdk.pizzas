import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonPizzaCard = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={491}
    viewBox="0 0 280 491"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="138" r="139" />
    <rect x="0" y="292" rx="10" ry="10" width="270" height="27" />
    <rect x="7" y="335" rx="6" ry="6" width="255" height="76" />
    <rect x="3" y="420" rx="10" ry="10" width="96" height="39" />
    <rect x="141" y="420" rx="25" ry="25" width="123" height="39" />
  </ContentLoader>
);

export default SkeletonPizzaCard;
