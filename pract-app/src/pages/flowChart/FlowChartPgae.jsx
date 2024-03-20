import React, { useState } from "react";
import Flowchart from "react-simple-flowchart";

const FlowChartPgae = () => {
  const [code, setCode] = useState(`st=>start: Begin
e=>end: End
op1=>operation: Operation 1|department1
op2=>operation: Operation 2|department2
op3=>operation: Operation 3|department3
sub=>subroutine: Go To Google|external:>http://www.google.com
cond=>condition: Google?
st(bottom)->op1(bottom)->op2(bottom)->op3(bottom)->cond(no)->sub(right)
cond(yes)->e`);

  const [opt, setOpt] = useState({
    x: 0,
    y: 0,
    "line-width": 3,
    "line-length": 50,
    "text-margin": 10,
    "font-size": 14,
    "font-color": "black",
    "line-color": "black",
    "element-color": "black",
    fill: "white",
    "yes-text": "yes",
    "no-text": "no",
    "arrow-end": "block",
    scale: 1,
    symbols: {
      start: {
        "font-color": "red",
        "element-color": "green",
        "font-weight": "bold",
      },
      end: {
        "font-color": "red",
        "element-color": "green",
        "font-weight": "bold",
      },
    },
    flowstate: {
      department1: { fill: "pink" },
      department2: { fill: "yellow" },
      department3: { fill: "red" },
      external: { fill: "green" },
    },
  });

  const [elementText, setElementText] = useState("none");

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleOptChange = (e) => {
    setOpt(JSON.parse(e.target.value));
  };

  return (
    <div>
      <p>Edit flowchart in real time!</p>
      <textarea
        cols="100"
        rows="10"
        value={code}
        onChange={handleCodeChange}
      />

      <p>Flowchart options</p>
      <textarea cols="100" rows="10" value={JSON.stringify(opt)} onChange={handleOptChange} />

      <p>Result</p>
      <p>
        Last Clicked Node: <strong>{elementText}</strong>
      </p>
      <div className="m-2">
        <Flowchart
          chartCode={code}
          options={opt}
          onClick={(elementText) => setElementText(elementText)}
        />
      </div>
    </div>
  );
};

export default FlowChartPgae;
