import React, { useState, useEffect } from "react";
import Flowchart from "react-simple-flowchart";
import SelectComponent from "../../components/Select";

const FlowCustome = () => {
  const [optionsList, setoptiOnsList] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setoptiOnsList({
      ...optionsList,
      [name]: value,
    });
  };

  useEffect(() => {
    setCode(
      `op1=>operation: ${optionsList.operations_1} |department1
      op2=>operation: ${optionsList.operations_2} |department2
      op3=>operation: ${optionsList.operations_3} |department3
      op1(bottom)->op2(bottom)->op3(bottom)`
    );
  }, [optionsList]);

  const [code, setCode] = useState(
    `op1=>operation: ${optionsList.operations_1} |department1
op2=>operation: ${optionsList.operations_2} |department2
op3=>operation: ${optionsList.operations_3} |department3 
op1(bottom)->op2(bottom)->op3(bottom)`
  );

  const [opt, setOpt] = useState({
    x: 0,
    y: 0,
    "line-width": 2,
    "line-length": 20,
    "text-margin": 10,
    "font-size": 14,
    "font-color": "white",
    "line-color": "black",
    "element-color": "black",
    fill: "white",
    "yes-text": "yes",
    "no-text": "no",
    "arrow-end": "block",
    scale: 1,
    symbols: {
      start: { "font-weight": "bold", fill: "green" },
      end: { "font-weight": "bold", fill: "red" },
      condition: { fill: "orange" },
      operation: { fill: "Gray" },
      subroutine: { fill: "purple" },
    },
  });

  const [elementText, setElementText] = useState("none");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="d-flex mx-2">
      <div>
        <p>Edit flowchart in real time!</p>
        <textarea
          cols="75"
          rows="10"
          value={code}
          onChange={handleCodeChange}
        />

        <form>
          <div>
            <label htmlFor="operations_1">operations_1:</label>
            <select
              type="text"
              id="operations_1"
              name="operations_1"
              value={optionsList.operations_1}
              onChange={handleInputChange}
            >
              <option value="213">123</option>
              <option value="12">12</option>
            </select>
          </div>
          <div>
            <label htmlFor="operations_2">operations_2:</label>
            <select
              type="email"
              id="operations_2"
              name="operations_2"
              value={optionsList.operations_2}
              onChange={handleInputChange}
            >
              <option value="213">123</option>
              <option value="12">12</option>
            </select>
          </div>
          <div>
            <label htmlFor="operations_3">operations_3:</label>
            <select
              id="operations_3"
              name="operations_3"
              value={optionsList.operations_3}
              onChange={handleInputChange}
            >
              <option value="213">123</option>
              <option value="12">12</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <p>
          Result Last Clicked Node: <strong>{elementText}</strong>
        </p>
        <Flowchart
          chartCode={code}
          options={opt}
          onClick={(elementText) => setElementText(elementText)}
        />
      </div>
    </div>
  );
};

export default FlowCustome;
