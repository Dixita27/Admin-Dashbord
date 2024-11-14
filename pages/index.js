import Link from 'next/link';

const Dashboard = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
    <div className="space-y-4">
      <Link href="/users">
        <a className="block p-4 bg-blue-500 text-white rounded">User Management</a>
      </Link>
      <Link href="/moderation">
        <a className="block p-4 bg-green-500 text-white rounded">Content Moderation</a>
      </Link>
      <Link href="/analytics">
        <a className="block p-4 bg-purple-500 text-white rounded">Analytics</a>
      </Link>
    </div>
  </div>
);

export default Dashboard;
