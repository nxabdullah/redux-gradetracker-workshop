import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";

const AddCourseModal: React.FC = () => {
  interface formValues {
    courseName: string;
    courseWeight: number;
  }

  const formik = useFormik<formValues>({
    initialValues: {
      courseName: "",
      courseWeight: 1,
    },
    onSubmit: (values: formValues) => {
      if (values.courseName !== "") {
        // TODO: add course (dispatch)
        closeModal();
      }
    },
    enableReinitialize: true,
  });

  const closeModal = () => {
    window.addCourseModal.close();

    // TODO: set selected course to undefined
  };

  return (
    <>
      <dialog id="addCourseModal" className="modal">
        <form
          method="dialog"
          className="modal-box"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="font-bold text-lg">ADD</h3>

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
              autoComplete="off"
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
              ADD
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default AddCourseModal;
