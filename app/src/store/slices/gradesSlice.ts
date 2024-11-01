import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { addCourse } from "..";
import { Course } from "./coursesSlice";

export interface Grade {
  id: string;
  name: string;
  grade: number;
  weight: number;
  courseId: string;
}

// index grades by course id
export type GradesByCourseId = {
  [courseId: string]: Grade[];
};

export type GradeState = {
  data: GradesByCourseId;
};

const initialState: GradeState = {
  data: {},
};

// TODO: Add initiate state

// TODO: Create slice & add reducers

// TODO: Export reducers and actions
