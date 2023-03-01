import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={315}
    height={532}
    viewBox="0 0 315 532"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle x="134" cx="136" cy="125" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
    <rect x="0" y="326" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="436" rx="10" ry="10" width="95" height="27" />
    <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);
