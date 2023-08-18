import React, { useEffect, useState } from "react";
import GeneralNav from "../Navbar/GeneralNav";
import SideMenuAdmin from "../SideMenuAdmin";
import styles from './style.module.css';
import { useRef } from "react";
import { EmpRegister } from "../request";
function AdminAddCustomerData() {
  const empId = useRef('');
  const empName = useRef('');
  const empGender = useRef('');
  const designation = useRef('');
  const dob = useRef('');
  const department=useRef('')
  const doj = useRef('');
  // const [loanDetails, updateDetails] = useState({});
useEffect(()=>{

  designation.current='Maneger';
  department.current='Finance';
  empGender.current='M'
})
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(e.target.empId.value)

    let formData = {
      employee_Id: empId.current,
      employee_Name: empName.current,
      employee_Gender: empGender.current,
      designation: designation.current,
      date_of_Birth: dob.current,
      date_of_Joining:doj.current,
      department:department.current
    }
     const res = await EmpRegister(formData)
    // empId.current='';
    // empGender.current='';
    // empName.current='';
    // designation.current='';
    // dob.current='';
    // // doj.current='';
    // department='';
       console.log(res)

    console.log(formData)
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
      <h2 className="text-warning">Customer Master Data Details</h2>
      <div className={`container text-white ${styles.formContainer}`}>

        <form className={`${styles.loanForm}`} onSubmit={handleSubmit}>
          <div className="row">

            <div className="form-group col-md-12">
              <label for="empName">Employee Name</label>
              <input required type="text" name="empName" className="form-control" id="empname" placeholder="Employee Name" ref={empName} onChange={(e) => empName.current = e.target.value} />
            </div>


          </div>
          <br></br>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="empId">Employee id</label>
              <input ref={empId} onChange={(e) => empId.current = e.target.value} required type="text" name="empId" className="form-control" id="inputEmail4" placeholder="Employee id" />
            </div>
            <div className="form-group col-md-6">
              <label for="inputState">Designation</label>
              <select name="designation" id="inputState" className="form-control" ref={designation} onChange={(e) => designation.current = e.target.value}>
                
              <option id="departure-city" value="" disabled="" selected="">Departure city</option>
                    <option value="1">Cairo</option>
                <option  value={'Maneger'}>Maneger</option>
                <option value={'Coder'}>Coder</option>
              </select>
            </div>
          </div>

          <br></br>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="gender">Gender</label>
              <select name="gender" id="gender" className="form-control" ref={empGender} onChange={(e) => {empGender.current = e.target.value; console.log(e.target.value)}}>
                <option selected value={'M'}>Male</option>
                <option value={'F'}>Female</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="dob">Date of Birth</label> 
              <input id="dob" className="form-control" type="date" ref={dob} onChange={(e)=>dob.current=e.target.value} required />
            </div>

          </div>

          <br></br>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="dept">Department</label>
              <select id="dept" name="itemMake" className="form-control" ref={department} onChange={(e)=>department.current=e.target.value}>
                <option value='Finance' selected>Finance</option>
                <option value ='Coder'>Coder</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="doj">Date of Joining</label>
              <input id="doj" className="form-control" type="date" ref={doj} onChange={(e)=>doj.current=e.target.value} required />
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
