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
import { nanoid } from "@reduxjs/toolkit";

function Course() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const course: CourseType | undefined = useSelector(
    (state: RootState): CourseType | undefined => {
      return state.courses.courses.find(
        (course: CourseType) => course.id === courseId
      );
    }
  );
  if (!course) {
    return <h1 className="text-3xl">Course not found</h1>;
  }

  // TODO:
  const handleAddGrade = () => {
    // DISPATCH THE CREATE GRADE REDUCER WITH APPROPRIATE ACTION
    const action = addGrade({
      id: nanoid(),
      courseId: course.id,
      name: "",
      grade: 0,
      weight: 0,
    });
    dispatch(action);
  };

  // TODO: exercise
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
