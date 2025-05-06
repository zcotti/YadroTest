import React from "react";
import "./BarChart.scss";

function BarChart({ data }) {
  const maxValue = Math.max(...data);

  return (
    <div className="bar-chart-container">
      {data.map((value, index) => (
        <div key={index} className="bar-column">
          <div
            className="bar"
            style={{
              height: `${(value / maxValue) * 100}%`,
            }}
          ></div>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}

export default BarChart;
