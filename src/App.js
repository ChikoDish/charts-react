import "./App.css";
import { Chart, LineAdvance } from "bizcharts";
import { data } from "./data";
function App() {
  return (
    <div className="App">
      <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={data}>
        <LineAdvance
          shape="smooth"
          point
          area
          position="month*temperature"
          color="city"
        />
      </Chart>
    </div>
  );
}

export default App;
