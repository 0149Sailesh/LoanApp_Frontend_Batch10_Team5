import React, {useState} from "react";
import GeneralNav from "../Navbar/GeneralNav";
import SideMenu from "../SideMenuUser";
import styles from './style.module.css'
function AdminAddLoanCard() {
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
    <div  style={{

      height: '100vh',
      backgroundImage: "url(" + "/icons/newwf.png" + ")",
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
      <GeneralNav></GeneralNav>
      <SideMenu></SideMenu>
      <h2 class="text-warning">Loan Card Master Data Details</h2>
    <div className={`container text-white ${styles.formContainer}`}>
    
      <form className={`${styles.loanForm}`} onSubmit={handleSubmit}>
  
    <div class="form-group">
      <label for="inputEmail4">Loan id</label>
      <input required type="text" name="loanId" class="form-control" id="inputEmail4" placeholder="Loan id"/>
    <br></br>
    <div class="form-group">
    <label for="inputState">Loan Type</label>
      <select name="loanType" id="inputState" class="form-control">
        <option selected>Furniture</option>
        <option>Crockery</option>
      </select>
    </div>
  </div>
  <br></br>
  <div class="row">
  <div class="form-group col-md-12 justify-content-center">
    <label for="inputAddress">Duration</label>
    <input required type="number" name="duration" class="form-control" id="inputAddress" placeholder="1"/>
  </div>
  </div>
  
  <br></br>
    <div className={`${styles.buttonContainer}`}>
    <button type="submit" class="btn text-warning fw-bold bg-danger">Add Data</button>
    </div>
  
</form>
</div>
    </div>
  );
}

export default AdminAddLoanCard;
