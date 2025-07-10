// src/components/BarChart.tsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'User Signups',
        data: [35, 50, 45, 60, 40],
        backgroundColor: '#3498db',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly User Signups',
      },
    },
  };

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
