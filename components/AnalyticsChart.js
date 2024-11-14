import { Bar } from 'react-chartjs-2';

const AnalyticsChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Views',
        data: data.map((item) => item.views),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Likes',
        data: data.map((item) => item.likes),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default AnalyticsChart;
