import React, { useEffect } from "react";
import GeneralNav from "../Navbar/GeneralNav";
import SideMenuAdmin from "../SideMenuAdmin";
import { useRef } from "react";
import styles from './style.module.css'
import { LoanRegister } from "../request";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminAddLoanCard() {
  
  const loanId=useRef('');
  const loanType=useRef('');
  const duration = useRef(0);

  useEffect(()=>{
loanType.current='Furniture'
  })
    const handleSubmit = async(e) => {
    e.preventDefault()
   
try{
    let formData = {
      loan_Id:loanId.current,
  loan_Type:loanType.current,
  duration: duration.current
    }
   let res= await LoanRegister(formData);
   console.log(res)
    console.log(formData)
  
toast.success('Added')
  
  }
catch(e){
  toast.error('Try again')
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
      <ToastContainer/>
      <GeneralNav></GeneralNav>
      <SideMenuAdmin></SideMenuAdmin>
      <h2 class="text-warning">Loan Card Master Data Details</h2>
      <div className={`container text-white ${styles.formContainer}`}>

        <form className={`${styles.loanForm}`} onSubmit={handleSubmit}>

          <div class="form-group">
            <label for="inputEmail4">Loan id</label>
            <input required type="text" name="loanId" class="form-control" id="inputEmail4" placeholder="Loan id" ref={loanId} onChange={(e)=>loanId.current=e.target.value} />
            <br></br>
            <div class="form-group">
              <label for="inputState">Loan Type</label>
              <select name="loanType" id="inputState" class="form-control" ref={loanType} onChange={(e)=>loanType.current=e.target.value}>
                <option value={'Furniture'} selected>Furniture</option>
                <option value={'Crockery'}>Crockery</option>
              </select>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="form-group col-md-12 justify-content-center">
              <label for="inputAddress">Duration</label>
              <input required type="number" name="duration" class="form-control" id="inputAddress" placeholder="1" ref={duration} onChange={(e)=>duration.current=e.target.value} />
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
