import React, {useState} from "react";
import GeneralNav from "../Navbar/GeneralNav";
import SideMenu from "../SideMenu";
import styles from './style.module.css'
function AdminAddCustomerData() {
  const [loanDetails, updateDetails] = useState({});

  const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(e.target.empId.value)

      let formData = {
        employeeId : e.target.empId.value,
        itemCategory : e.target.itemCategory.value,
        itemDescription : e.target.itemDescription.value,
        itemValue : Number(e.target.itemValue.value),
        itemMake : e.target.itemMake.value
      }

      console.log(formData)
  }
  return (
    <div>
      <GeneralNav></GeneralNav>
      <SideMenu></SideMenu>

    <div className={`container ${styles.formContainer}`}>
      <h2 class="text-warning">Customer Master Data Details</h2>
      <form className={`${styles.loanForm}`} onSubmit={handleSubmit}>
  <div class="row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Employee id</label>
      <input required type="text" name="empId" class="form-control" id="inputEmail4" placeholder="Employee id"/>
    </div>
    <div class="form-group col-md-6">
    <label for="inputState">Designation</label>
      <select name="designation" id="inputState" class="form-control">
        <option selected>Furniture</option>
        <option>Crockery</option>
      </select>
    </div>
  </div>
  <br></br>
  <div class="row">
  <div class="form-group col-md-6">
    <label for="inputAddress">Item Description</label>
    <input required type="text" name="itemDescription" class="form-control" id="inputAddress" placeholder="Item description"/>
  </div>
  <div class="form-group col-md-6">
  <label for="startDate">Date of Birth</label>
  <input id="startDate" class="form-control" type="date" />
  </div>
 
  </div>
 
  <br></br>
  <div class="row">
    <div class="form-group col-md-6">
    <label for="inputState2">Department</label>
      <select id="inputState2" name="itemMake" class="form-control">
        <option selected>Opt1</option>
        <option>Opt2</option>
      </select>
    </div>
    <div class="form-group col-md-6">
    <label for="startDate">Date of Joining</label>
    <input id="startDate" class="form-control" type="date" />
    </div>
    
  </div>
  <br></br>
  <div class="row">
    <div class="form-group col-md-6">
    <label for="inputState2">Gender</label>
      <select id="inputState2" name="itemMake" class="form-control">
        <option selected>Male</option>
        <option>Female</option>
      </select>
    </div>
  </div>
    <div className={`${styles.buttonContainer}`}>
    <button type="submit" class="btn text-warning bg-danger">Add data</button>
    </div>
  
</form>
</div>
    </div>
  );
}

export default AdminAddCustomerData;
