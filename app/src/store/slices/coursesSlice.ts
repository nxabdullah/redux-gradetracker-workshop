import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Course {
  id: string;
  name: string;
  weight: number;
}

export type CourseState = {
  courses: Course[];
  selectedCourse: Course | undefined;
};

// TODO: Add initiate state
const initialState: CourseState = {
  courses: [],
  selectedCourse: undefined,
};

// TODO: Create slice & add reducers
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // add
    addCourse(state, action: PayloadAction<Course>) {
      state.courses.push(action.payload);
    },
    // delete
    deleteCourse(state, action: PayloadAction<Course>) {
      const courseIndex = state.courses.findIndex(
        (course) => action.payload.id == course.id
      );
      if (courseIndex !== -1) {
        state.courses.splice(courseIndex, 1);
      }
    },
    // edit
    editCourse(state, action: PayloadAction<Course>) {
      const newCourseInfo = action.payload;
      const courseIndex = state.courses.findIndex(
        (course) => action.payload.id == course.id
      );
      if (courseIndex !== -1) {
        state.courses[courseIndex].name = newCourseInfo.name;
        state.courses[courseIndex].weight = newCourseInfo.weight;
      }
    },
    // select
  },
});

// TODO: Export reducers and actions
export const { addCourse, editCourse, deleteCourse } = coursesSlice.actions;
export const courseReducer = coursesSlice.reducer;
