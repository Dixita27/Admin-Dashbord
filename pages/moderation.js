import { useFetch } from '../hooks/useFetch';
import ModerationPanel from '../components/ModerationPanel';

const Moderation = () => {
  const { data, error, isLoading } = useFetch('https://api.socialverseapp.com/admin/dashboard/moderation');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading moderation data</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Content Moderation</h1>
      <ModerationPanel data={data.metrics} />
    </div>
  );
};

export default Moderation;
