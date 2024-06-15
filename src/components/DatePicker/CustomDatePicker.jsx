import React from "react";
import DatePicker from "react-date-picker";

const CustomDatePicker = ({ ...props }) => (
  <div>
    <DatePicker {...props} data-testid="Date of Birth" />
  </div>
);

export default CustomDatePicker;
