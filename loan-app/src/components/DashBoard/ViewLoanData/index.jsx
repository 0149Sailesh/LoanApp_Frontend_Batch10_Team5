
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

let keys = ['Loan ID', 'Loan Type', 'Duration', 'Actions']

export function ViewLoanTable() {
    const loanId=useRef('');
    const loanType=useRef('');
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
        let res = await DeleteLoan(id);
        console.log(res)
        setDeleted(!deleted)
        // console.log(id)
    }
     function openModel() {
        setViewModel(true)
    }
    function closeModel(){
        setViewModel(false);
    }
    function editComponent() {
        return (
            <div>
                <form className={`${styles.loanForm}`} >

                    <div class="form-group">
                        <label for="inputEmail4">Loan id</label>
                        <input required type="text" name="loanId" class="form-control" id="inputEmail4" placeholder="Loan id" ref={loanId} onChange={(e) => loanId.current = e.target.value} />
                        <br></br>
                        <div class="form-group">
                            <label for="inputState">Loan Type</label>
                            <select name="loanType" id="inputState" class="form-control" ref={loanType} onChange={(e) => loanType.current = e.target.value}>
                                <option value={'Furniture'} selected>Furniture</option>
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
                    

                </form>
            </div>
        )
    }

    return (
        <div className='container'>
            {viewModle && <LocalModel childComponent={editComponent} closeModel={closeModel}></LocalModel>}
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