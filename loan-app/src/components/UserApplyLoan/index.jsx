import React, {useState} from "react";
import GeneralNav from "../Navbar/GeneralNav";
import SideMenu from "../SideMenuUser";
import styles from './styles.module.css'
function UserLoanApply() {
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
      <h2>Loan Application</h2>
      <form className={`${styles.loanForm}`} onSubmit={handleSubmit}>
  <div class="row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Employee id</label>
      <input required type="text" name="empId" class="form-control" id="inputEmail4" placeholder="Employee id"/>
    </div>
    <div class="form-group col-md-6">
    <label for="inputState">Item Category</label>
      <select name="itemCategory" id="inputState" class="form-control">
        <option selected>Furniture</option>
        <option>Crockery</option>
      </select>
    </div>
  </div>
  <br></br>
  <div class="form-group">
    <label for="inputAddress">Item Description</label>
    <input required type="text" name="itemDescription" class="form-control" id="inputAddress" placeholder="Item description"/>
  </div>
  <br></br>
  <div class="row">
  
    <div class="form-group col-md-6">
      <label for="inputState2">Item Make</label>
      <select id="inputState2" name="itemMake" class="form-control">
        <option selected>Opt1</option>
        <option>Opt2</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity">Item value</label>
      <input required type="text" name="itemValue" class="form-control" id="inputCity"/>
    </div>
    
  </div>
    <div className={`${styles.buttonContainer}`}>
    <button type="submit" class="btn text-warning bg-danger">Apply loan</button>
    </div>
  
</form>
</div>
    </div>
  );
}

export default UserLoanApply;
