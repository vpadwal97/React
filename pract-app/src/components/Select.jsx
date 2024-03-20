// SelectComponent.js
import React, { useEffect } from "react";

const SelectComponent = ({ ...props }) => {
  const findParentWithClass = (element, className) => {
    let parent = element.parentElement;
    while (parent) {
      if (parent.classList.contains(className)) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  };

  

  useEffect(() => {
    const selects = document.querySelectorAll(".form-floating .form-select");
    const handleSelectLabel = (element) => {
      const selectedIndex = element.selectedIndex;
      const parentElements = findParentWithClass(element, "form-floating");
      const labelElements = parentElements.querySelector("label");
      selectedIndex === 0 && document.activeElement !== element
        ? labelElements.classList.add("label_middle")
        : labelElements.classList.remove("label_middle");
    };

    const handleFocus = (element) => {
      const parentElements = findParentWithClass(element, "form-floating");
      const labelElements = parentElements.querySelector("label");
      labelElements.classList.remove("label_middle");
    };

    const handleFocusOut = (element) => {
      const parentElements = findParentWithClass(element, "form-floating");
      const labelElements = parentElements.querySelector("label");
      labelElements.classList.add("label_middle");
      handleSelectLabel(element);
    };

    selects.forEach((element) => {
      element.addEventListener("change", () => handleSelectLabel(element));
      element.addEventListener("focus", () => handleFocus(element));
      element.addEventListener("focusout", () => handleFocusOut(element));
    });

    selects.forEach((element) => {
      handleSelectLabel(element);
    });

    // Cleanup function
    // return () => {
    //   selects.forEach((element) => {
    //     element.removeEventListener("change", () => handleSelectLabel(element));
    //     element.removeEventListener("focus", () => handleFocus(element));
    //     element.removeEventListener("focusout", () => handleFocusOut(element));
    //   });
    // };
  }, []); // Empty dependency array means this effect will run once after the initial render

  return (
    <div className="form-floating">
      <select
        className="form-select input-shadow"
        id={props.label.replace(" ", "_")}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        disabled={props.disabled}
      >
        <option value="">Please Select</option>

        {props.dropdownlist?.map((option) =>
          props.defaultValueOption ? (
            <option
              defaultValue={props.defaultValueOption === option.optionValue}
              key={option.optionValue}
              value={option.optionValue}
            >
              {option.optionLabel}
            </option>
          ) : (
            <option
              defaultValue={option.optiondefaultValue}
              key={option.optionValue}
              value={option.optionValue}
            >
              {option.optionLabel}
            </option>
          )
        )}
      </select>
      {/* {((props.value === "PleaseSelect") ? label_middle="label_middle" : label_middle='')} */}
      <label className={``} htmlFor={props.label.replace(" ", "_")}>
        {props.label}
        <span className={props.required}></span>
        <span>{/* {ttcontentSelectComponent} */}</span>
      </label>
    </div>
  );
};

export default SelectComponent;
