import React from 'react'
import { Bar,Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend,ArcElement} from 'chart.js';


  ChartJS.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend,ArcElement);

import Navbar from '@/Components/Navbar';
const Month = () => {
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4',' Day 5',' Day 6','Day 7',' Day 8','Day 9','Day 10','Day 11','Day 12'],
        datasets: [{
            label: 'Hours Usage',
            data: [0.5,1,1.5,2,0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
            backgroundColor: 'white',
            borderColor: "white",
            BorderWidth: 1,
            pointBorderColor: "transparent",
            tension: 0.5,
            hoverBackgroundColor: "purple", // Customize the color of bars
          },
    
        ],
      };
      const options ={
        
      };
    
      const data1={
        labels: ['Tv','Fridge','Mixer','Microwave','Coffee maker','Washing Machine'],
        datasets:[{label:'Current Usage',
                    data:[3,6,7,5,2,1],
                    bordercolor: 'black',
                    backgroundColor:['#8ecae6','#219ebc','#023047','#ffb703','#fb8500','blue'],
      },
    
      ]
    
      };
      const data2={
        labels: ['Tv','Fridge','Mixer','Microwave','Coffee maker','Washing Machine'],
        datasets:[{label:'Current Usage',
        data:[3,9,4,5,5,9],
        bordercolor: 'black',
        backgroundColor:['#262626','#acbfa4','#e2e8ce','#ff7f11','#ff1b1c','#8d5a97'],
      },
    
      ]
    
      };
      const data3={
        labels: ['Tv','Fridge','Mixer','Microwave','Coffee maker','Washing Machine'],
        datasets:[{label:'Current Usage',
        data:[3,6,3,5,2,1],
        bordercolor: 'black',
        backgroundColor:['#ff9f1c','#ffbf69','#ffffff','#cbf3f0','#2ec4b6','#40798c'],
      },
    
      ]
    
      };
      
  return (
    <div>
      <Navbar/>

      
      <h1 className="text-3xl mt-20 mx-auto text-center font-bold">
        Daily Review
      </h1>
  
     <div className="relative h-[30rem] w-[50rem] mx-auto p-[5rem] bg-gray-900 m-5 rounded-xl">
        <Bar data={data} options={options}></Bar>
      </div>
      
      <h1 className="relative mb-5 text-3xl mt-20 mx-auto text-center font-bold">
        Individual Appliances
      </h1>
      <div className="relative isolate overflow-hidden mb-20 mx-20 bg-gray-900 py-16 rounded-2xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto ">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-3 lg:pt-2">
              <div className="flex flex-col items-start">
               <Pie data={data1} options={options}></Pie>
              </div>
              <div className="flex flex-col items-start">
              <Pie data={data2} options={options}></Pie>
              </div>
              <div className="flex flex-col items-start">
              <Pie data={data3} options={options}></Pie>
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
  )
}

export default Month
