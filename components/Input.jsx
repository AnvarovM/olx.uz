import React from "react";

const Input = ({ placeholder, w, type, name, ref, onChange }) => {
  return (
    <div>
      <input
      ref={ref}
        className={`${w} rounded-md bg-gray-200 p-3 text-sm outline-none`}
        required
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
