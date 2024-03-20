import React, { useState } from 'react';

const MyComponent = () => {
  // Define state variables to hold form data
  const [optionsList, setoptiOnsList] = useState({

  });

  // Handler for input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setoptiOnsList({
      ...optionsList,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div>
      <h2>My Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="operations_1">operations_1:</label>
          <select type="text" id="operations_1" name="operations_1" value={optionsList.operations_1} onChange={handleInputChange}>
            <option value="213">123</option>
                        <option value="12">12</option>
          </select>
        </div>
        <div>
          <label htmlFor="operations_2">operations_2:</label>
          <select type="email" id="operations_2" name="operations_2" value={optionsList.operations_2} onChange={handleInputChange} >
            <option value="213">123</option>
                        <option value="12">12</option>
          </select>
        </div>
        <div>
          <label htmlFor="operations_3">operations_3:</label>
          <select id="operations_3" name="operations_3" value={optionsList.operations_3} onChange={handleInputChange} >
            <option value="213">123</option>
                        <option value="12">12</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display form data */}
      <div>
        <h3>Form Data</h3>
        <p>Name: {optionsList.operations_1}</p>
        <p>Email: {optionsList.operations_2}</p>
        <p>Message: {optionsList.operations_3}</p>
      </div>
    </div>
  );
};

export default MyComponent;

