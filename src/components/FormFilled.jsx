import React from "react";

const FormFilled = ({
  lableName,
  type,
  name,
  placeHolder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex item center gap-2 mb-2">
        <label
          htmlFor="name"
          className=" block text-sm font-medium text-gray-900"
        >
          {lableName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className=" bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-1"
          >
            {" "}
            Surprise me{" "}
          </button>
        )}
      </div>
      <input
      type={type}
      id={name}
      name={name}
      placeholder={ placeHolder}
      value={value}
      onChange={handleChange}
      required
      className="w-96 h-10 p-3  disabled:opacity-75 m-4 rounded-[5px] outline outline-2 outline-offset-2 "/>
      
    </div>
  );
};

export default FormFilled;
