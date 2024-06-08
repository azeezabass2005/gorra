"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.backgroundColor = "#ff0000";
ChartJS.defaults.borderColor = "#eaeaec"


export const options = {
  responsive: true,
  scales: {
    y: {
      min: 0,
      max:300,
      grid: {
        display: false,
      }
    },
    x: {
      grid: {
        display: false,
      }
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Revenue',
    },
  },
  elements: {
    line: {
      tension: 0.4, // Adjust this value to control curve intensity (0-1)
    },
  },
};

const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
const presentMonth = new Date().getMonth()
let monthTemplate: String[] = []
const labels = monthTemplate.reverse()
const monthToShowOnGraph = () => {
  for(let i = presentMonth; monthTemplate.length < 7; i--) {
    if (i === 0) {
      monthTemplate.push(allMonths[0]);
    } else if (i === 1) {
      monthTemplate.push(allMonths[1]);
    } else if (i === 2) {
      monthTemplate.push(allMonths[2]);
    } else if (i === 3) {
      monthTemplate.push(allMonths[3]);
    } else if (i === 4 || i === -8) {
      monthTemplate.push(allMonths[4]);
    } else if (i === 5 || i === -7) {
      monthTemplate.push(allMonths[5]);
    } else if (i === 6 || i === -6) {
      monthTemplate.push(allMonths[6]);
    } else if (i === 7 || i === -5) {
      monthTemplate.push(allMonths[7]);
    } else if (i === 8 || i === -4) {
      monthTemplate.push(allMonths[8]);
    } else if (i === 9 || i === -3) {
      monthTemplate.push(allMonths[9]);
    } else if (i === 10 || i === -2) {
      monthTemplate.push(allMonths[10]);
    } else if (i === 11 || i === -1) {
      monthTemplate.push(allMonths[11]);
    } else {
      break;
    }
  }
  console.log(monthTemplate)
  monthTemplate.reverse()
}
monthToShowOnGraph()

export const data = {
  labels,
  datasets: [
    {
      label: 'Revenue per month',
      data: [50, 150, 25, 100, 50, 200, 175, 110],
      borderColor: '#36485e',
      backgroundColor: '#eaeaec55',
    },
  ],
};

const SaleChart = () => {
  
  return (
    <div className='w-full min-h-[350px] bg-[var(--lightest-grey)] shadow-md rounded-2xl p-5 flex justify-center items-center bg-[rgb(149,251,200)]'>
      <Line options={options} data={data} className='h-full' />
    </div>
  )
}

export default SaleChart