import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
interface BarChartsProps{
  horizontal?:boolean
  data1:number[]
  data2:number[]
  title1:string
  title2:string
  bgColor1: string
  bgColor2:string
  labels?:string[]

}
const months = ['January',
  'February',
  'March',
  'April',
  'May', 
  'June', 
  'July'
];


export const BarCharts = ({
  horizontal,
  data1=[],
  data2=[],
  title1,
  title2,
  bgColor1,
  bgColor2,
  labels =  months}:BarChartsProps)=> {
   const options:ChartOptions<"bar"> = {
    responsive: true,
    indexAxis:horizontal?"y":"x",
    plugins: {
      legend: {
        display:false,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
    scales:{
      y:{
        beginAtZero:true,
        grid:{
          display:false,
        },
      },
      x:{
        beginAtZero:true,
        grid:{
          display:false,
        },
      },
      
    }
  };
  
  
   const data:ChartData<"bar",number[],string>= {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor: bgColor1,
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage:0.4
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bgColor2,
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage:0.4
      },
    ],
  };
  return <Bar options={options} data={data} />;
}


interface DoughnutChartProps {
  
  data:number[]
  backgroundColor:string[]
  labels:string[]
  cutout?:number | string
  legends?: boolean
  offset?:number[] 
   
}


export const DoughnutChart= ({
  data,
  backgroundColor,
  labels,
  cutout,
  legends,
  offset}:DoughnutChartProps)=>{
  const doughnutData : ChartData<"doughnut",number[],string >={
    labels,
    datasets :[
      {
        data,
        backgroundColor,
        borderWidth:0,
        offset

      }
    ]
  }
  const doughnutOption : ChartOptions<"doughnut"> = {
    responsive:true,
    plugins:{
      legend:{
        display:legends,
        position:"bottom",
        labels:{
          padding:40,
        }
      }
    },
    cutout
  }
  return <Doughnut options={doughnutOption} data = {doughnutData}/>
}