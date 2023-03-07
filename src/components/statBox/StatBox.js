import React from "react";

export const StatBox = ({ clicks, name }) => {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">
          {name} <span>Clicks</span>
        </div>
        <div className="stat-value">{clicks}</div>
      </div>
    </div>
  );
};
