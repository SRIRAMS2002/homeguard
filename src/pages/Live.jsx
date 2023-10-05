
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Navbar from '@/Components/Navbar';

const LivePreview = () => {
  chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

  

  const data = {
    labels: ["Morning", "", "Lunch", "", "Afternoon", "", "Night"],
    datasets: [
      {
        data: [10, 0, 20,0, 0,50, 0,0 ],
        backgroundColor: "black",
        borderColor: "white",
        pointBorderWidth: 4,
        pointBorderColor: "transparent",
        tension: 0.5,
        
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          fontColor: "white",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 80,
        ticks: {
          stepSize: 10,
          callback: (value) => value + "W",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Dynamic Data",
        data: [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate new data
      const newDataPoint =  Math.random() * 100; 

      // Update chart data
      setChartData((prevData) => ({
        ...prevData,
        labels: [...prevData.labels, new Date().toLocaleTimeString()],
        datasets: [
          {
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data, newDataPoint],
          },
        ],
      }));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <Navbar />


      <h1 className="text-3xl mx-auto text-center font-bold">Live - Demo Preview</h1>

      <div className="relative h-[30rem] w-[50rem] mx-auto p-[5rem] bg-gray-900 m-5 rounded-xl">
        <Line data={chartData} />
       
      </div>

      <h1 className="text-3xl mt-20 mx-auto text-center font-bold">
        Daily Review
      </h1>
      <div className="relative h-[30rem] w-[50rem] mx-auto p-[5rem] bg-gray-900 m-5 rounded-xl">
        <Line data={data} options={options}></Line>
      </div>

      

      
      
      <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center py-10' >Total Usage</h1>
      <div className="relative isolate overflow-hidden mb-20 mx-20 bg-gray-900 py-16 rounded-2xl">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mx-auto ">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-3 lg:pt-2">
              <div className="flex flex-col items-start">
                <dt className="mt-4 font-semibold text-white">
                  units :
                </dt>
                <dd className="mt-2  text-gray-500">0.08 Unit</dd>
              </div>
              <div className="flex flex-col items-start">
                <dt className="mt-4 font-semibold text-white">
                  Current in Watt :
                </dt>
                <dd className="mt-2  text-gray-500">80 Watts</dd>
              </div>
              <div className="flex flex-col items-start">
                <dt className="mt-4 font-semibold text-white">Rupees :</dt>
                <dd className="mt-2  text-gray-400">0.36</dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LivePreview;
