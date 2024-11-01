import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { courseReducer, CourseState } from "./slices/coursesSlice";
import { gradesReducer, GradeState } from "./slices/gradesSlice";
import {
  toastsReducer,
  ToastsState,
  addToast,
  deleteToast,
} from "./slices/toastsSlice";
import { addCourse, editCourse, deleteCourse } from "./slices/coursesSlice";
import { addGrade, updateGrade, removeGrade } from "./slices/gradesSlice";

export interface RootState {
  toasts: ToastsState;
  courses: CourseState;
  grades: GradeState;
}

// TODO:
const rootReducer = combineReducers({
  toasts: toastsReducer,
  courses: courseReducer,
  grades: gradesReducer,
});

// TODO: configure store
const store = configureStore({
  reducer: rootReducer,
  // middleware: [thunk],
});

// export actions + store
export {
  store,
  addToast,
  deleteToast,
  addCourse,
  editCourse,
  deleteCourse,
  addGrade,
  updateGrade,
  removeGrade,
};
