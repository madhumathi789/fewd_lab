import { useEffect, useState } from "react";

function Dynamic() {
  return (
    <>
      <DynamicInput />
    </>
  );
}

function DynamicInput() {
  const [formConfig, setFormConfig] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const config = [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      {name: "password", label: "password", type: "password", required: true },
      {name:"date of birth",label:"date of birth",type:"date",required:true},
      {name:"Address",label:"address",type:"",required:true}
    ];
    const initialFormData = {};
    config.forEach((field) => {
      initialFormData[field.name] = "";
    });
    setFormConfig(config);
    setFormData(initialFormData);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      formConfig={formConfig}
      formData={formData}
      handleInputChange={handleInputChange}
    />
  );
}

function Form({ onSubmit, formConfig, formData, handleInputChange }) {
  return (
    <form onSubmit={onSubmit}>
      {formConfig.map(({ name, label, type, required }) => (
        <div key={name}>
          <label htmlFor={name}>{label}:</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            required={required}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Dynamic;
