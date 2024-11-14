import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";

const FindRental = () => {
  const locations = [
    "Badshahpur", "Sector 49", "Sector 70", "Sector 71", "Sector 69", 
    "Sector 75", "Sector 70A", "Sector 66", "Sector 67", "Sector 67A", 
    "Sector 64", "Sector 63", "Sector 62", "Sector 55", "Sector 54", 
    "Sector 56", "Sector 53", "Sector 42", "Sector 44", "Sector 45", 
    "Sector 38", "Sector 34", "Sector 33", "Sector 10", "Sector 11", 
    "Sector 37", "Sector 37B", "Sector 37D" ,"Maneshar"
  ];

  // Inline CSS styles
  const formGroupStyle = {
    flex: '1',
    marginRight: '1rem'
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    textDecoration: 'none',
    textAlign: 'center'
  };

  const formInputsContainerStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '1rem',
    marginBottom: '1rem'
  };

  return (
    <Form className="form" style={{ padding: '2rem' }}>
      <div style={formInputsContainerStyle}>
        <FormGroup style={formGroupStyle}>
          <label htmlFor="delivery-location" style={labelStyle}>
            Select Available Location
          </label>
          <select
            id="delivery-location"
            style={inputStyle}
            required
            defaultValue=""
            aria-label="Select Delivery Location"
          >
            <option value="" disabled>
              Check your location 
            </option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </FormGroup>

        <FormGroup style={formGroupStyle}>
          <label htmlFor="rental-start-date" style={labelStyle}>
            Rental Start Date
          </label>
          <input
            type="date"
            id="rental-start-date"
            style={inputStyle}
            required
            aria-label="Rental Start Date"
          />
        </FormGroup>

        <FormGroup style={formGroupStyle}>
          <label htmlFor="rental-end-date" style={labelStyle}>
            Rental End Date
          </label>
          <input
            type="date"
            id="rental-end-date"
            style={inputStyle}
            required
            aria-label="Rental End Date"
          />
        </FormGroup>
      </div>

      <FormGroup>
        <Link to="/BookingForm" style={{ textDecoration: 'none' }}>
          <button style={buttonStyle} type="button">
            Find Service
          </button>
        </Link>
      </FormGroup>
    </Form>
  );
};

export default FindRental;
