import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Input from "../components/Input";
import SelectComponent from "../components/Select";
// import Select from "../components/select2";
// import Scrollbars from "../components/Scrollbars";

const About = () => {
  const [disAttrSelect, setDisAttrSelect] = useState();

  let [disAttrSelectData ] = useState([]);
  disAttrSelectData = [
    {
      id: "8787879329",
      optionLabel: "Core/Business Attributes",
      optionValue: "CORE_ATTRss",
      optiondefaultValue: false,
    },
    {
      id: "8787879636",
      optionLabel: "Core/Business Attribute",
      optionValue: "CORE_ATTRs",
      optiondefaultValue: false,
    },
    {
      id: "8787879637",
      optionLabel: "General Attribute",
      optionValue: "GEN_ATTRs",
      optiondefaultValue: false,
    },
    {
      id: "8787879638",
      optionLabel: "Seller Core Attribute",
      optionValue: "SLR_CORE_ATTRs",
      optiondefaultValue: false,
    },
    {
      id: "8787879639",
      optionLabel: "Core/Business Attribute",
      optionValue: "CORE_ATTR",
      optiondefaultValue: false,
    },
    {
      id: "8787879640",
      optionLabel: "General Attribute",
      optionValue: "GEN_ATTR",
      optiondefaultValue: false,
    },
    {
      id: "8787879641",
      optionLabel: "Seller Core Attribute",
      optionValue: "SLR_CORE_ATTR",
      optiondefaultValue: false,
    },
  ];

  return (
    <>
      <div>Main parent</div>
      <div className="mt-5">
        <div className="row mx-0">
          <div className="col-4">
            <Input type="text" className="123" label="custm text" placeholder="" />
          </div>
          <div className="col-4">
            {/* <SelectComponent className="123" label="custm text" /> */}

            <SelectComponent
              label="IsDisplay Attribute"
              tooltipMessage="123"
              defaultValueOption={disAttrSelect}
              onChange={(e) => setDisAttrSelect(e.target.value)}
              dropdownlist={disAttrSelectData}
            />
            </div>
            {/* <div className="col-4">
            <Select 
            label="IsDisplay Attribute3"
            options={disAttrSelectData}/>
            </div> */}
            <div className="col-4">
            <SelectComponent
              label="IsDisplay Attribute2"
              tooltipMessage="123"
              defaultValueOption={disAttrSelect}
              onChange={(e) => setDisAttrSelect(e.target.value)}
              dropdownlist={disAttrSelectData}
            />
          </div>
        </div>
      </div>

      <Outlet />
      
    </>
  );
};

export default About;
