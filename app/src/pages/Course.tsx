import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grades from "../components/course/Grades";
import Stats from "../components/course/Stats";
import { RootState } from "../store";
import { Course as CourseType } from "../store/slices/coursesSlice";
import { addGrade, deleteCourse } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import EditCourseModal from "../components/course/EditCourseModal";
import useToasts from "../hooks/useToasts";

function Course() {
  const { courseId } = useParams();
  // TODO:

  const course = { id: "course1", name: "CSC108", weight: 1 };

  if (!course) {
    return <h1 className="text-3xl">Course not found</h1>;
  }

  const handleAddGrade = () => {
    alert("Add Grade clicked! This would normally add a new grade.");
  };

  // TODO:
  const handleDeleteCourse = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      alert("Delete Course clicked! This would normally delete the course.");
    }
  };

  return (
    <>
      <EditCourseModal course={course} />
      <h1 className="text-3xl font-bold">
        {course.name}
        <button
          className="btn btn-sm float-right ms-2"
          onClick={handleDeleteCourse}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </h1>

      <div className="mt-8"></div>

      <h1 className="text-xl font-bold mt-8">
        your grades
        <button
          className="btn btn-primary float-right btn-sm"
          onClick={handleAddGrade}
        >
          add grade
        </button>
      </h1>
      <div className="mt-2"></div>
      <Grades courseId={courseId!} />
    </>
  );
}

export default Course;
