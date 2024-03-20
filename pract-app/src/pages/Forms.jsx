import React, { useState } from "react";
import Input from "../components/Input";
import Button from "react-bootstrap/esm/Button";
import Textarea from "../components/textareas";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like submit it to a server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="row m-0">
      <div className="col-sm-4">
        {/* <label htmlFor="name">Name:</label> */}
        <Input
          type="text"
          class="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder=""
          label="Name"
        />
      </div>
      <div className="col-sm-4">
        {/* <label htmlFor="email">Email:</label> */}
        <Input
          type="email"
          class="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=""
          label="email"
        />
      </div>
      <div className="col-sm-4">
        {/* <label htmlFor="message">Message:</label> */}
        <Textarea
          id="message"
          name="message"
          rows="1"
          // cols="100"
          value={formData.message}
          onChange={handleChange}
          placeholder=""
          label="message"
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Forms;
