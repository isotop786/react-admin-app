import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Prouducts',
      },
    },
  };
  
  const labels = ['Shirts', 'Pants', 'Watches', 'Shoes', "Women's Clothes","Baby Cares","Books","Movies","Musics","Games"];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Product Sale',
        data: [344,553,234,63,120,234,45,324,32,56,22],
        backgroundColor: '#439A97',
      }
    ],
  };

const ProductBar = () => {
    return <Bar options={options} data={data} />;

}

export default ProductBar