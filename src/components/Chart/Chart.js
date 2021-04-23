import "./Chart.css";
import ChartBar from "./ChartBar";

const chart = (props) => {
  const dataPointArray = props.dataPoints.map(dataPoint => dataPoint.value);
  const dataPointMaxValue = Math.max(...dataPointArray); // Math.max(1, 2, 3 ); then return maximum number

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={dataPointMaxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default chart;
