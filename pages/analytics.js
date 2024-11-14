import { useFetch } from '../hooks/useFetch';
import AnalyticsChart from '../components/AnalyticsChart';

const Analytics = () => {
  const { data, error, isLoading } = useFetch('https://api.socialverseapp.com/admin/dashboard/analytics');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading analytics data</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Analytics</h1>
      <AnalyticsChart data={data.metrics} />
    </div>
  );
};

export default Analytics;
