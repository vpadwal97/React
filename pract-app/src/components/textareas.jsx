import React from "react";
const Textarea = ({ ...props }) => {
  return (
    <>
      <div className="form-group">
        <textarea
          className={`form-control ` + props.class}
          id={props.label.replace(' ','_')}
          type={props.type}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          maxLength={props.maxLength}
          disabled={props.disabled}
          placeholder={props.placeholder}
          rows={props.rows}
          cols={props.cols}
        />
        <label htmlFor={props.label.replace(' ','_')}>
          {props.label}
          <span className={props.required}></span>
        </label>
      </div>
    </>
  );
};

export default Textarea;
