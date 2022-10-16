import React from "react";
import Collapsible from "react-collapsible";
import "./Collapse.css";

function Collapse(props) {
  return (
    <div className="individual">
      <Collapsible
        trigger={props.name}
        triggerStyle={{
          color: "white",
          padding: "10px",
          textDecoration: "",
          backgroundColor: "#4856B7",
          borderRadius: "10px",
        }}
        style={{ backgroundColor: "4856B7", margin: "2%" }}
      >
        <div className="innerBody">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Sex</th>
                <th scope="col">Symptoms</th>
                <th scope="col">City</th>
                <th scope="col">Prescription</th>
                <th scope="col">Medicines</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.sex}</td>
                <td>{props.symptoms}</td>
                <td>{props.city}</td>
                <td>{props.prescription}</td>
                <td>{props.meds}</td>
              </tr>
            </tbody>
          </table>
          <div className="editableArea">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Remarks</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Remarks"
                />
                
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Total Bill</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Total Bill"
                />
              </div>
              
               
             
              <button type="submit"  class="btn btn-primary" style={{margin:'10px'}}>
                Submit
              </button>
            </form>
          </div>
        </div>
        
      </Collapsible>
    </div>
  );
}

export default Collapse;
