import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { useAuth } from '../../context/AuthContext';

import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    region: '',
    name : '',
    age: '',
    status: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate password match
  if (formData.password !== formData.confirmPassword) {
    alert('Passwords do not match');
    return;
  }

try {
  const response = await axios.post(
    `https://finpro-sbd-backend.vercel.app/voter/register?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&password=${encodeURIComponent(formData.password)}&age=${encodeURIComponent(formData.age)}&status=${encodeURIComponent(formData.status)}`
  );

    if (response.data.success) {
      alert('Registration successful!');
      navigate('/login');
    } else {
      alert(response.data.message || 'Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    alert('An error occurred during registration');
  }
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Region</label>
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          className="form-input"
          required
        >
          <option value="">Select Occupation</option>
          <option value="region1">Region 1</option>
          <option value="region2">Region 2</option>
          <option value="region3">Region 3</option>
        </select>
      </div>

      <InputField
        label="Name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <InputField
        label="Age"
        type="number"
        name="age"
        placeholder="Enter your age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-input"
          required
        >
          <option value="">Select Status</option>
          <option value="Kawin">Kawin</option>
          <option value="Jomblo">Jomblo</option>
          <option value="TNI">TNI</option>
        </select>
      </div>
      
      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Text"
        value={formData.password}
        onChange={handleChange}
        required
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
          </svg>
        }
      />
      
      <InputField
        label="Confirm password"
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
          </svg>
        }
      />
      
      <Button type="submit" className="w-full">Register</Button>
      
      <div className="text-center mt-4">
        <p className="text-sm">
          Already voted? <Link to="/login" className="text-blue-300 underline">Login</Link> to see the voting progress
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;