import React, { useState } from "react";

import "./CustomizeCheckbox.css";
import { Checkbox, Col, Slider } from "antd";
import { Link } from "react-router-dom";
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const onChangeSlider = (checked) => {
  setDisabled(checked);
};
const options = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
  },
];
const sliderStyle = {
  trackStyle: { backgroundColor: "#26a59a" },
  handleStyle: {
    borderColor: "#26a59a",
    backgroundColor: "#26a59a",
  },
};
const Filter = () => {
  return (
    <Col className="gutter-row " span={6}>
      <div>
        <div className="text-lg font-semibold text-left">Danh mục</div>
        <div className="m-4">
          <Checkbox.Group
            className="custom-checkbox"
            style={{ width: "100%" }}
            options={options}
            defaultValue={["Pear"]}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold text-left">Giá cả</div>
        <div className="mt-4">
          <Slider
            range
            defaultValue={[500000, 2000000]}
            min={0}
            max={10000000}
            trackStyle={sliderStyle.trackStyle}
            handleStyle={sliderStyle.handleStyle}
          />
        </div>
      </div>
    </Col>
  );
};
export default Filter;
