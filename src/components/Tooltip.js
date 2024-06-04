import React from "react";

export const Tooltip = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="This top tooltip is themed via CSS variables."
      >
        Custom tooltip
      </button>
    </div>
  );
};
