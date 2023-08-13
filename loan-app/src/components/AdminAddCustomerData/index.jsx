import React, { useState } from "react";
import GeneralNav from "../Navbar/GeneralNav";
import SideMenuAdmin from "../SideMenuAdmin";
import styles from './style.module.css'
function AdminAddCustomerData() {
  const [loanDetails, updateDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.empId.value)

    let formData = {
      employeeId: e.target.empId.value,
      itemCategory: e.target.itemCategory.value,
      itemDescription: e.target.itemDescription.value,
      itemValue: Number(e.target.itemValue.value),
      itemMake: e.target.itemMake.value
    }

    console.log(formData)
  }
  return (
    <div  style={{

      height: '100vh',
      backgroundImage: "url(" + "/icons/newwf.png" + ")",
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
  
      <GeneralNav></GeneralNav>
      <SideMenuAdmin></SideMenuAdmin>
      <h2 className="text-warning">Customer Master Data Details</h2>
      <div className={`container text-white ${styles.formContainer}`}>

        <form className={`${styles.loanForm}`} onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Employee id</label>
              <input required type="text" name="empId" className="form-control"  id="inputEmail4" placeholder="Employee id" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">Designation</label>
              <select name="designation" id="inputState" className="form-control">
                <option selected>Furniture</option>
                <option>Crockery</option>
              </select>
            </div>
          </div>
          <br></br>
          <div className="row">

            <div className="form-group col-md-12">
              <label for="inputAddress">Item Description</label>
              <input required type="text" name="itemDescription" className="form-control" id="inputAddress" placeholder="Item description" />
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="inputState2">Gender</label>
              <select id="inputState2" name="itemMake" className="form-control">
                <option selected>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="startDate">Date of Birth</label>
              <input id="startDate" className="form-control" type="date" />
            </div>

          </div>

          <br></br>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="inputState2">Department</label>
              <select id="inputState2" name="itemMake" className="form-control">
                <option selected>Opt1</option>
                <option>Opt2</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="startDate">Date of Joining</label>
              <input id="startDate" className="form-control" type="date" />
            </div>

          </div>
          <br></br>
          <div className={`${styles.buttonContainer}`}>
            <button type="submit" className="btn text-warning bg-danger">Add data</button>
          </div>

        </form>
      </div>
    </div>
    
  );
}

export default AdminAddCustomerData;
