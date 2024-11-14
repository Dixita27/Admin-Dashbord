import { useFetch } from '../hooks/useFetch';
import UserTable from '../components/UserTable';

const Users = () => {
  const { data, error, isLoading } = useFetch('https://api.socialverseapp.com/admin/dashboard/users');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">User Management</h1>
      <UserTable users={data.users} />
    </div>
  );
};

export default Users;
