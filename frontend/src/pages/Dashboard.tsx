
import BarChart from '../components/BarChart';
import UserTable from '../components/UserTable';
import UserForm from '../components/UserForm';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <BarChart />
      <br />
      <UserTable />
      <br />
      <UserForm />
    </div>
  );
};

export default Dashboard;
