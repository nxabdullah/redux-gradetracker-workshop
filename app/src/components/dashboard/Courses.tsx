import AddCourseModal from "./AddCourseModal";
import { Link } from "react-router-dom";
import EmptyRow from "../shared/EmptyRow";

function Courses() {
  const renderedCourses = (
    <>
      <tr key="course1">
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold text-lg">
                <Link to="/courses/course1">CSC108</Link>
              </div>
            </div>
          </div>
        </td>
        <td>87.5%</td>
        <td>0.5</td>
        <th>
          <Link to="/courses/course1">
            <button className="btn btn-ghost btn-sm">view</button>
          </Link>
        </th>
      </tr>
      <tr key="course2">
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold text-lg">
                <Link to="/courses/course2">MAT102</Link>
              </div>
            </div>
          </div>
        </td>
        <td>78.0%</td>
        <td>0.5</td>
        <th>
          <Link to="/courses/course2">
            <button className="btn btn-ghost btn-sm">view</button>
          </Link>
        </th>
      </tr>
    </>
  );

  return (
    <>
      <h1 className="text-2xl font-semibold">
        Your Courses
        <button
          className="btn btn-primary float-right"
          onClick={() => window.addCourseModal.showModal()}
        >
          add course
        </button>
        <AddCourseModal />
      </h1>
      <div className="mt-4"></div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>cumulative grade</th>
              <th>weight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderedCourses}</tbody>
        </table>
      </div>
    </>
  );
}

export default Courses;
