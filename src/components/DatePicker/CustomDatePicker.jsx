import React from "react";
import DatePicker from "react-date-picker";

const CustomDatePicker = ({ ...props }) => (
  <div>
    <DatePicker {...props} />
  </div>
);

export default CustomDatePicker;
