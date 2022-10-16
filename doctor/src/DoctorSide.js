import React, { useState } from "react";
import useCollapse from "react-collapsed";
import "./DoctorSide.css";

const DoctorSide = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [formFields, setFormFields] = useState([
    { medicine: "", prescription: "" },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      medicine: "",
      prescription: "",
    };
    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps()}>
        {isExpanded ? "Collapse Doctor Form" : "Expand Doctor Form"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <div className="doctorSide">
            <h1>Doctor Form</h1>
            <h2>Medicines & Prescription</h2>
            <form onSubmit={submit}>
              {formFields.map((form, index) => {
                return (
                  <div key={index} className="docInput">
                    <input
                      name="medicine"
                      placeholder="Medicine Name"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.medicine}
                    />
                    <textarea
                      name="prescription"
                      type="text"
                      placeholder="prescription"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.prescription}
                    />
                    <button
                      className="form2Buttons"
                      onClick={() => removeFields(index)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </form>
            <button className="addMedicineButtons" onClick={addFields}>
              Add more Medicine
            </button>
            <br />
            <button className="form2Buttons" onClick={submit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSide;
