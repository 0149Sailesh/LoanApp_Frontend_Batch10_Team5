
import Table from 'react-bootstrap/Table';
import React from 'react';
import styles from './style.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { ViewTable } from '../../ViewTable';
import { GetAllLoan } from '../../request';
import { DeleteLoan } from '../../request';
import LocalModel from '../../Model';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { PutLoan } from '../../request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let keys = ['Loan ID', 'Loan Type', 'Duration', 'Actions']

export function ViewLoanTable() {
    const [modelObj, setModelObj] = useState([]);
    const loanType = useRef('');
    const duration = useRef(0);
    const [viewModle, setViewModel] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [displayValue, setDisplayValue] = useState([])
    const [list, setList] = useState([])

    function ObjectToArray(val) {
        let res = [];
        for (let i of val) {
            res.push(Object.values(i));
        }
        setDisplayValue(res);

        console.log(res)
    }

    useEffect(async () => {
        const res = await GetAllLoan();
        console.log(res)
        ObjectToArray(res.data)
        setList(res.data)
    }, [deleted]);


    function search(query) {
        let res = [];
        if (query !== '') {

            for (let i of list) {
                //console.log(i);
                if (i.loan_Id.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || i.loan_Type.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
                    res.push(Object.values(i));
            }
            setDisplayValue(res)

        }
        else {
            ObjectToArray(list)
        }

        console.log(res)
    }

    async function deleteHandler(id) {
       try{ let res = await DeleteLoan(id);
        console.log(res)
        setDeleted(!deleted)
        toast.success("Deleted")
    }
        catch(e){
            toast.error('Try again')
        }
        // console.log(id)
    }
    function openModel(value) {
        setModelObj(value);
        loanType.current = value[1];
        duration.current = value[2];
        setViewModel(true)
    }
    function closeModel() {
        setViewModel(false);
    }
    async function handleSubmit(e) {
        e.preventDefault()

        try{
        let formData = {
            loan_Id: modelObj[0],
            loan_Type: '',
            duration: ''
        }
      
        if (typeof loanType.current === 'string' || loanType.current instanceof String) {
            formData.loan_Type=loanType.current;
        }
        else{
            formData.loan_Type='Furniture';
        }
        if (typeof duration.current === 'string' || duration.current instanceof String) {
            formData.duration=duration.current;
        }
        else{
            formData.duration=modelObj[2];
        }

        const res = await PutLoan(formData)
        console.log(res);
        console.log(formData)
        setDeleted(!deleted)
        closeModel()
        toast.success("Edited Successfully")
}
catch(e){
    toast.error("Invaild Data")
}
    }

    function editComponent() {
        return (
            <div>
                <form className={`${styles.loanForm}`} >

                    <div class="form-group">

                        <div class="form-group">
                            <label for="inputState">Loan Type</label>
                            <select name="loanType" id="inputState" class="form-control" ref={loanType} onChange={(e) => loanType.current = e.target.value}>
                                <option value={'Furniture'} >Furniture</option>
                                <option value={'Crockery'}>Crockery</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="form-group col-md-12 justify-content-center">
                            <label for="inputAddress">Duration</label>
                            <input required type="number" name="duration" class="form-control" id="inputAddress" placeholder="1" ref={duration} onChange={(e) => duration.current = e.target.value} />
                        </div>
                    </div>
                    <br></br>

                    <div>
                        <Button variant="secondary" className='mr-3' onClick={closeModel}>Close</Button>
                        <Button onClick={handleSubmit} variant="warning " className={styles.btnModel}>Save changes</Button>
                    </div>

                </form>
            </div>
        )
    }

    return (
        <div className='container'>
            {viewModle && <LocalModel childComponent={editComponent} heading={`Edit model for Loan Card: ${modelObj[0]}`}></LocalModel>}
            <ToastContainer/>
            <h1 className={`r text-warning ${styles.head}`}>Loan Data</h1>
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

            <ViewTable keys={keys} values={displayValue} deleteHandler={deleteHandler} modelHandler={openModel} />

        </div>
    );
}