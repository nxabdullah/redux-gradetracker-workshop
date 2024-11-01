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

// TODO: Create slice & add reducers

// TODO: Export reducers and actions
