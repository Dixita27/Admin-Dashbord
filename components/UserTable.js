const UserTable = ({ users }) => (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Activity</th>
          <th className="py-2 px-4">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border px-4 py-2">{user.name}</td>
            <td className="border px-4 py-2">{user.activity}</td>
            <td className="border px-4 py-2">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default UserTable;
  