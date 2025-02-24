import React from 'react';

const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default InputField;
