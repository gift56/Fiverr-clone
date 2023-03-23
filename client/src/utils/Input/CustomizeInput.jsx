import React from "react";

const CustomizeInput = ({
  htmlFor,
  showLabel,
  id,
  label,
  className,
  labelClassName,
  inpuClassName,
  error,
  onChange,
  onBlur,
  accept,
  errorClass,
  containerClass,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${containerClass}`}>
      {showLabel === false && (
        <label htmlFor={htmlFor} className={labelClassName}>
          {label}
        </label>
      )}
      <div className={`flex flex-col gap-1 w-full ${inpuClassName}`}>
        <input
          {...props}
          className={`${className} ${error ? "border !border-red-400" : ""}`}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          accept={accept}
        />
        {error ? (
          <p className={`text-xs text-red-600 ${errorClass}`}>{error}</p>
        ) : null}
      </div>
    </div>
  );
};

export default CustomizeInput;
