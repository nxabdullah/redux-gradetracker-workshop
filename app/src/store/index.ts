import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { CourseState } from "./slices/coursesSlice";
import { GradeState } from "./slices/gradesSlice";
import {
  toastsReducer,
  ToastsState,
  addToast,
  deleteToast,
} from "./slices/toastsSlice";

export interface RootState {
  toasts: ToastsState;
  courses: CourseState;
  grades: GradeState;
}

// TODO:
const rootReducer = combineReducers({
  toasts: toastsReducer,
});

// TODO: configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

// export actions
export { store, addToast, deleteToast };
