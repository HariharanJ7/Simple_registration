import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setErrors, resetForm } from '../redux/register/registerSlice';
import InputField from '../pages/textInput';
import DatePickerField from '../pages/dateInput';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { formData, errors } = useSelector((state) => state.form);

  const handleChange = useCallback((e) => {
    dispatch(updateField({ field: e.target.name, value: e.target.value }));
  },[dispatch]);

  const handleDateChange = useCallback((date) => {
    dispatch(updateField({ field: 'dateOfBirth', value: date }));
  },[dispatch]);

  const validate = () => {
    const newErrors = {};
    const { firstName, lastName, email, password, confirmPassword, dateOfBirth } = formData;

    if (!firstName.trim()) newErrors.firstName = 'First Name is required';
    else if (firstName.length > 50) newErrors.firstName = 'Max 50 characters allowed';

    if (!lastName.trim()) newErrors.lastName = 'Last Name is required';
    else if (lastName.length > 50) newErrors.lastName = 'Max 50 characters allowed';

    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';

    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';

    if (!confirmPassword.trim()) newErrors.confirmPassword = 'Confirm Password is required';
    else if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords must match';

    if (!dateOfBirth) newErrors.dateOfBirth = 'Date of Birth is required';

    dispatch(setErrors(newErrors));
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      dispatch(resetForm());
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <h3 className="text-center">Register</h3>
        <form onSubmit={handleSubmit}>
          <InputField label="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} />
          <InputField label="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} error={errors.lastName} />
          <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
          <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} error={errors.password} />
          <InputField label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
          <DatePickerField value={formData.dateOfBirth} onChange={handleDateChange} error={errors.dateOfBirth} />
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
