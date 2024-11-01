import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Toasts() {
  const toasts = useSelector((state: RootState) => state.toasts.toasts);

  return (
    <div className="toast toast-bottom toast-start">
      {toasts.map((toast) => (
        <div
          className={classNames(
            "alert",
            { "alert-success": toast.type === "success" },
            { "alert-error": toast.type === "error" },
            { "alert-warning": toast.type === "warning" },
            { "alert-info": toast.type === "info" }
          )}
        >
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

export default Toasts;
