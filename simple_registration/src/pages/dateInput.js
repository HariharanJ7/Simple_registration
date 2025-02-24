import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DatePickerField = ({ value, onChange, error }) => {
  return (
    <div className="mb-3">
      <label className="form-label me-2">Date of Birth</label>
      <DatePicker
        selected={value}
        onChange={onChange}
        className="form-control"
        dateFormat="yyyy-MM-dd"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        placeholderText="Date of Birth"
        maxDate={moment().subtract(18, 'years').toDate()}
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default DatePickerField;
