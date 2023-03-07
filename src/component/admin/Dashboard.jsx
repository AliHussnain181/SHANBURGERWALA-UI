import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend } from "chart.js";
ChartJS.register(Tooltip, ArcElement, Legend);


const Dashboard = () => {

  let ali = 21;
  let shan = 18;
  let zain = 17;


  const data = {
    labels: [
      'ali',
      'shan',
      'zain'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [ali, shan, zain],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };



  return <>
    <aside className="w-[40vw] mx-auto">
      <Doughnut data={data} />
    </aside>

  </>
};

export default Dashboard;
