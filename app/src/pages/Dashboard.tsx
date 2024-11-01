import Courses from "../components/dashboard/Courses";
import SemesterStats from "../components/dashboard/SemesterStats";

function Dashboard() {
  return (
    <>
      <SemesterStats />
      <div className="mt-8"></div>
      <Courses />
    </>
  );
}

export default Dashboard;
