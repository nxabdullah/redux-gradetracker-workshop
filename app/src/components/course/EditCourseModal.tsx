import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Course } from "../../store/slices/coursesSlice";

interface AddCourseModalProps {
  course: Course;
}

const EditCourseModal: React.FC<AddCourseModalProps> = ({ course }) => {
  interface formValues {
    courseName: string;
    courseWeight: number;
  }

  const formik = useFormik<formValues>({
    initialValues: {
      courseName: course.name,
      courseWeight: course.weight,
    },
    onSubmit: (values) => {
      // TODO: dispatch
      closeModal();
    },
    enableReinitialize: true,
  });

  const closeModal = () => {
    window.editCourseModal.close();
  };

  return (
    <>
      <dialog id="editCourseModal" className="modal">
        <form
          method="dialog"
          className="modal-box"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="font-bold text-lg">EDIT COURSE</h3>

          <div className="form-control w-full max-w-xs">
            <label className="label mt-2">
              <span className="label-text">Course name</span>
            </label>
            <input
              type="text"
              placeholder="CSC108H1"
              className="input input-bordered w-full max-w-xs"
              id="courseName"
              name="courseName"
              onChange={formik.handleChange}
              value={formik.values.courseName}
              autoComplete="false"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label mt-2">
              <span className="label-text">Course weight</span>
            </label>
            <select
              className="select select-bordered"
              id="courseWeight"
              name="courseWeight"
              onChange={formik.handleChange}
              value={formik.values.courseWeight}
            >
              <option value={1}>0.5</option>
              <option value={2}>1.0</option>
            </select>
          </div>

          <div className="modal-action">
            <button className="btn" type="button" onClick={closeModal}>
              close
            </button>
            <button className="btn btn-primary" type="submit">
              SAVE
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default EditCourseModal;
