import React from "react";
const Input = ({ ...props }) => {
  return (
    <>
      <div className="form-group">
        <input
          className={`form-control ` + props.class}
          id={props.label.replaceAll(' ','_')}
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          maxLength={props.maxLength}
          disabled={props.disabled}
          placeholder={props.placeholder}
        />
        <label htmlFor={props.label.replaceAll(' ','_')}>
          {props.label}
          <span className={props.required}></span>
        </label>
      </div>
    </>
  );
};

export default Input;
