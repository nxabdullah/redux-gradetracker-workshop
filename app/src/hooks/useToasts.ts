import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addToast, deleteToast } from "../store/slices/toastsSlice";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

/**
 * Hook that provides a function to set a toast message.
 *
 * @returns {function(string, 'success' | 'error' | 'warning' | 'info'): void} - A function that takes a message and type, and dispatches an action to add a toast.
 */
const useToasts = () => {
  const dispatch = useDispatch();

  /**
   * Function to set a toast message.
   *
   * @param {string} message - The message to be displayed in the toast.
   * @param {'success' | 'error' | 'warning' | 'info'} type - The type of the toast.
   */
  const setToast = (
    message: string,
    type: "success" | "error" | "warning" | "info"
  ): void => {
    const toast: Toast = {
      id: nanoid(),
      message,
      type,
    };

    dispatch(addToast(toast));

    setTimeout(() => {
      dispatch(deleteToast(toast));
    }, 4000);
  };

  return setToast;
};

export default useToasts;
