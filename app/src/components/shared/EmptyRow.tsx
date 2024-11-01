import React from "react";

interface props {
  message: string;
}

const EmptyRow: React.FC<props> = ({ message }) => {
  return (
    <tr className="bg-gray-100 bg-opacity-50 border-none">
      <td colSpan={4}>
        <div className="text-center text-gray-500 mt-8 mb-8 font-light text-base">
          {message}
        </div>
      </td>
    </tr>
  );
};

export default EmptyRow;
