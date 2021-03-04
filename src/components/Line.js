import React from "react";
//import { Chart, LineAdvance, Point } from "bizcharts";
import { Doughnut } from "react-chartjs-2";

const Line = ({ data }) => {
  return (
    // <Chart padding={[10, 20, 50, 40]} autoFit height={300} data={data}>
    //   <LineAdvance
    //     shape="smooth"
    //     point
    //     area
    //     position="month*temperature"
    //     color="city"
    //   />
    // </Chart>
    <Doughnut data={data} />
  );
};

export default Line;
