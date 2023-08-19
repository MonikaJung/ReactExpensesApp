import React from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

export default function Chart(props) {
  const dataPointsValues = props.dataPoints.map(point => point.value);
  const maxValue = Math.max(...dataPointsValues);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
