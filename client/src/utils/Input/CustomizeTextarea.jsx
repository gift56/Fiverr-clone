import React from "react";

const CustomizeTextarea = ({
  htmlFor,
  id,
  label,
  className,
  labelClassName,
  inpuClassName,
  error,
  onChange,
  onBlur,
  containerClass,
  showLabel,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${containerClass}`}>
      {showLabel === false && (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={`${className} ${error ? "border !border-red-400" : ""}`}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
      ></textarea>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};

export default CustomizeTextarea;
