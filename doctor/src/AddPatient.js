//make a doctor side react component which has one button which says "Add Patient" and when clicked it will add patient to database by api call

import React, { useState } from "react";
import useCollapse from "react-collapsed";
import "./AddPatient.css";

const AddPatient = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const [formFields, setFormFields] = useState([
    {
      userName: "",
      userGender: "",
      userAge: "",
      userSymptoms: "",
      userContact: "",
      rdocter: "",
      rChecked: "",
    },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://localhost:3000/api/addpatient", {
        method: "POST",
        body: JSON.stringify({
          userName: formFields.userName,
          userGender: formFields.userGender,
          userAge: formFields.userSymptoms,
          userSymptoms: formFields.userSymptoms,
          userContact: formFields.userContact,
          rdocter: formFields.rdocter,
          rChecked: formFields.rChecked,
        }),
      });
      let resJson = await res.json();
      
    } catch (err) {
      console.log(err);
    }
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      userName: "",
      userGender: "",
      userAge: "",
      userSymptoms: "",
      userContact: "",
      rdocter: "",
      rChecked: "",
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
        {isExpanded ? "Collapse Patient Form" : "Expand Patient Form"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <div className="addPatient">
            <h1>Patient Form</h1>
            <form onSubmit={submit}>
              {formFields.map((form, index) => {
                return (
                  <div key={index} className="input">
                    <input
                      name="userName"
                      placeholder="Name"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.userName}
                    />
                    <input
                      name="userGender"
                      placeholder="gender"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.userGender}
                    />
                    <input
                      name="userAge"
                      placeholder="age"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.userAge}
                    />
                    <input
                      name="userSymptoms"
                      placeholder="symptoms"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.userSymptoms}
                    />
                    <input
                      name="userContact"
                      placeholder="contact"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.userContact}
                    />
                    <input
                      name="rdocter"
                      placeholder="doctor"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.rdocter}
                    />
                    <input
                      name="rChecked"
                      placeholder="checked"
                      onChange={(event) => handleFormChange(event, index)}
                      value={form.rChecked}
                    />
                    <div className="btn-box">
                      {formFields.length !== 1 && (
                        <button onClick={() => removeFields(index)}>
                          Remove
                        </button>
                      )}
                      {formFields.length - 1 === index && (
                        <button onClick={addFields}>Add</button>
                      )}
                    </div>
                  </div>
                );
              })}
              <button type="submit" className="docInput">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
