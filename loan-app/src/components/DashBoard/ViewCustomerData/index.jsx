
import React from 'react';
import styles from './styles.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { ViewTable } from '../../ViewTable';
import { GetAllEmployee } from '../../request';
import { DeleteEmployee } from '../../request';
import LocalModel from '../../Model';
import { useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { PutEmployee } from '../../request';
let keys = ['Employee ID', 'Employee Name','Gender', 'Designation', 'Department', 'Birth Date', 'Join Date', 'Actions']

export function ViewCustomerData() {
    const [list, setList] = useState([])
    const [deleted, setDeleted] = useState(true)
    const [viewModle, setViewModel] = useState(false);
    const [modelObj, setModelObj] = useState([])

    const empName = useRef('');
    const empGender = useRef('');
    const designation = useRef('');
    const dob = useRef('');
    const department = useRef('')
    const doj = useRef('');
    function ObjectToArray(val) {
        let res = [];
        for (let i of val) {
            res.push(Object.values(i));
        }
        setDisplayValue(res);
        console.log(res)
    }


    const [displayValue, setDisplayValue] = useState([])
    useEffect(async () => {
        const res = await GetAllEmployee();
        console.log(res)
        ObjectToArray(res.data);
        setList(res.data)
    }, [deleted]);


    function search(query) {
        let res = [];
        if (query !== '') {

            for (let i of list) {
                //console.log(i);
                if (i.employee_Name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || i.employee_Id.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
                    res.push(Object.values(i));
            }
            setDisplayValue(res)

        }
        else {
            ObjectToArray(list);
        }

        console.log(res)
    }

    async function deleteHandler(id) {
        let res = await DeleteEmployee(id);
        console.log(res)
        setDeleted(!deleted)
        // console.log(id)
    }
    function openModel(value) {
        setModelObj(value);

        setViewModel(true)
    }
    function closeModel() {
        setViewModel(false);
    } const handleSubmit = async(e) => {
        e.preventDefault()
        
    
        let formData = {
          employee_Id: modelObj[0],
          employee_Name: empName.current,
          employee_Gender: empGender.current,
          designation: designation.current,
          date_of_Birth: dob.current,
          date_of_Joining:doj.current,
          department:department.current,
          password: "string"
        }
        if (typeof formData.employee_Name !== 'string') {
            formData.employee_Name=modelObj[1]
        }
        if (typeof formData.employee_Gender !== 'string') {
            formData.employee_Gender=modelObj[2]
        }

        if (typeof formData.date_of_Birth !== 'string') {
            formData.date_of_Birth=modelObj[5]
        }
        if (typeof formData.date_of_Joining !== 'string') {
            formData.date_of_Joining=modelObj[6]
        }
        if (typeof formData.department !== 'string') {
            formData.department=modelObj[4]
        }
         if (typeof formData.designation !== 'string') {
            formData.designation=modelObj[3]
        }
         const res = await PutEmployee(formData)
        // empId.current='';
        // empGender.current='';
        // empName.current='';
        // designation.current='';
        // dob.current='';
        // // doj.current='';
        // department='';
           console.log(res)
    
        console.log(formData)

        setDeleted(!deleted)
        closeModel()
      }
     
    function editHandler() {
   
        return (
            <form className={`${styles.loanForm} w-70` } >
                <div className="row">

                    <div className="form-group col-md-12">
                        <label for="empName">Employee Name</label>
                        <input required defaultValue={modelObj[1]} type="text" name="empName" className="form-control" id="empname" placeholder="Employee Name" ref={empName} onChange={(e) => empName.current = e.target.value} />
                    </div>


                </div>
               
                <div className="row">
                    
                    <div className="form-group col-md-12">
                        <label for="inputState">Designation</label>
                        <select defaultValue={modelObj[3]} name="designation" id="inputState" className="form-control" ref={designation} onChange={(e) => designation.current = e.target.value}>

                            <option value={'Maneger'}>Maneger</option>
                            <option value={'Coder'}>Coder</option>
                        </select>
                    </div>
                </div>

             
                <div className="row">
                    <div className="form-group col-md-6">
                        <label for="gender">Gender</label>
                        <select defaultValue={modelObj[2]} name="gender" id="gender" className="form-control" ref={empGender} onChange={(e) => { empGender.current = e.target.value; console.log(e.target.value) }}>
                            <option selected value={'M'}>Male</option>
                            <option value={'F'}>Female</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="dob">Date of Birth</label>
                        <input defaultValue={modelObj[5]} id="dob" className="form-control" type="date" ref={dob} onChange={(e) => dob.current = e.target.value} required />
                    </div>

                </div>

                
                <div className="row">
                    <div className="form-group col-md-6">
                        <label for="dept">Department</label>
                        <select defaultValue={modelObj[4]} id="dept" name="itemMake" className="form-control" ref={department} onChange={(e) => department.current = e.target.value}>
                            <option value='Finance' selected>Finance</option>
                            <option value='Coder'>Coder</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="doj">Date of Joining</label>
                        <input defaultValue={modelObj[6]}  id="doj" className="form-control" type="date" ref={doj} onChange={(e) => doj.current = e.target.value} required />
                    </div>

                </div>
               
                <div className={`${styles.buttonContainer}`}>
                    <Button variant="secondary" className='mr-3' onClick={closeModel}>Close</Button>
                    <Button className={styles.btnModel} onClick={handleSubmit}>Save changes</Button>

                </div>

            </form>
        )
    }

    return (
        <div className='container'>
           { viewModle&&<LocalModel childComponent={editHandler} heading={`Edit model for Customer: ${modelObj[0]}`}></LocalModel>}
            <h1 className={`r text-warning ${styles.head}`}>Customer Data</h1>
            <div className={styles.navBar} >

                <InputGroup className={styles.searchBar} onChange={(x) => search(x.target.value)}>
                    <Form.Control className={styles.searchInput}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder='Search'
                    />
                </InputGroup>
                <button className={`bg-danger text-warning fw-bold ${styles.btn}`}>{'<'}</button>
                <button className={`bg-danger text-warning fw-bold ${styles.btn}`}>{'>'}</button>
            </div>
            <ViewTable keys={keys} modelHandler={openModel} values={displayValue} deleteHandler={deleteHandler} />
        </div>
    );
}