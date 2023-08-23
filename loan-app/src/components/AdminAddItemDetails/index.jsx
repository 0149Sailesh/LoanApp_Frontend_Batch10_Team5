import React, { useState } from "react";
import GeneralNav from "../Navbar/GeneralNav";
import SideMenuAdmin from "../SideMenuAdmin";
import styles from './style.module.css'
import { AddItem } from "../request";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AdminAddItemDetails() {
  const [loanDetails, updateDetails] = useState({});

  const handleSubmit = async(e) => {
    console.log("Submitttinggggggg")
    try{
      console.log("try block")
      e.preventDefault()
    
    let formData = {
      item_Id: e.target.itemId.value,
      item_Category: e.target.itemCategory.value,
      item_Description: e.target.itemDescription.value,
      item_Valuation: Number(e.target.itemValue.value),
      item_Make: e.target.itemMake.value,
      issue_Status: e.target.itemStatus.value
    }
    console.log("Form data is", formData)

    let res = await AddItem(formData)
    toast.success('Item Added Successfully')
    console.log(res)
   
    } catch(e){
      console.log(e)
      toast.error('Invalid item data')
    }
    
  }
  return (
    <div style={{

      height: '100vh',
      backgroundImage: "url(" + "/icons/newwf.png" + ")",
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <GeneralNav></GeneralNav>
      <SideMenuAdmin></SideMenuAdmin>
      <ToastContainer/>
      <h2 class="text-warning">Item Master Data Details</h2>
      <div className={`container text-white ${styles.formContainer}`}>

        <form className={`${styles.loanForm}`} onSubmit={handleSubmit}>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Item id</label>
              <input required type="text" name="itemId" class="form-control" id="inputEmail4" placeholder="Item id" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">Item Category</label>
              <select name="itemCategory" id="inputState" class="form-control">
                <option selected>Furniture</option>
                <option>Crockery</option>
                <option>Electronics</option>
              </select>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="form-group col-md-9">
              <label for="inputAddress">Item Description</label>
              <input required type="text" name="itemDescription" class="form-control" id="inputAddress" placeholder="Item description" />
            </div>
            <div class="form-group col-md-3">
              <label for="inputState2">Issue Status</label>
              <select id="inputState2" name="itemStatus" class="form-control">
                <option selected>Y</option>
                <option>N</option>
              </select>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputCity">Item value</label>
              <input required type="text" name="itemValue" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputState2">Item Make</label>
              <select id="inputState2" name="itemMake" class="form-control">
                <option selected>Opt1</option>
                <option>Opt2</option>
                <option>ceramic</option>
                <option>stainless steel</option>
              </select>
            </div>


          </div>
          <br></br>
          
          <div className={`${styles.buttonContainer}`}>
            <button type="submit" class="btn text-warning fw-bold bg-danger">Add item</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AdminAddItemDetails;
