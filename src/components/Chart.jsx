// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
// eslint-disable-next-line no-unused-vars
import { Bar, Line } from "react-chartjs-2";

const Chart = ({ charts }) => {
  return (
    <div className="container">
      <div className="card p-3 m-3">
        <h1>Temperature Graph</h1>
        {charts ? <Line data={charts.temperature} /> : <p>Loading...</p>}
      </div>
      <div className="card p-3 m-3">
        <h1>Humidity Graph</h1>
        {charts ? <Line data={charts.humidity} /> : <p>Loading...</p>}
      </div>
      <div className="card p-3 m-3">
        <h1>Pressure Graph</h1>
        {charts ? <Line data={charts.pressure} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Chart;
