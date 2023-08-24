
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
    const [pageNumber, setPageNumber] = useState(0);
    const [pageNation, setPageNation] = useState([]);
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
        let pageArr = [];
        let onepage = [];
        let i = 0;
        for (let r of res.data) {
            if (i === 5) {

                pageArr.push(onepage);
                onepage = [];
                onepage.push(r)
                i = 0;
            }
            else {
                onepage.push(r);
                i++;
            }
        }
        if (onepage.length !== 0) {
            pageArr.push(onepage);
        }

        ObjectToArray(pageArr[0])
        setPageNation(pageArr)
        setList(res.data)
    }, [deleted]);
    function nextPage() {
        if (pageNumber + 1 < pageNation.length) {

            ObjectToArray(pageNation[pageNumber + 1]);
            setPageNumber(pageNumber + 1);
        }
        else {
            setPageNumber(0);
            ObjectToArray(pageNation[0])
        }
    }
    function previousPage() {
        if (pageNumber - 1 >= 0) {

            ObjectToArray(pageNation[pageNumber - 1]);
            setPageNumber(pageNumber - 1);
        }
        else {
            setPageNumber(pageNation.length - 1);
            ObjectToArray(pageNation[pageNation.length - 1])
        }
    }
    const [focus, setFocus] = useState(false)

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
    function searchPage(value) {
        let val = Number(value);
        val--
        if (val >= 0 && val < pageNation.length) {
            ObjectToArray(pageNation[val]);
            setPageNumber(val)
        }
        else {
            if (value !== '')
                toast.error('Enter Valid Page Number')

            ObjectToArray(pageNation[0]);
            setPageNumber(0)

        }
    }
    async function deleteHandler(id) {
        try {
            let res = await DeleteLoan(id);
            console.log(res)
            setDeleted(!deleted)
            toast.success("Deleted")
        }
        catch (e) {
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

        try {
            let formData = {
                loan_Id: modelObj[0],
                loan_Type: '',
                duration: ''
            }

            if (typeof loanType.current === 'string' || loanType.current instanceof String) {
                formData.loan_Type = loanType.current;
            }
            else {
                formData.loan_Type = 'Furniture';
            }
            if (typeof duration.current === 'string' || duration.current instanceof String) {
                formData.duration = duration.current;
            }
            else {
                formData.duration = modelObj[2];
            }

            const res = await PutLoan(formData)
            console.log(res);
            console.log(formData)
            setDeleted(!deleted)
            closeModel()
            toast.success("Edited Successfully")
        }
        catch (e) {
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
                            {/* <select name="loanType" id="inputState" class="form-control" ref={loanType} onChange={(e) => loanType.current = e.target.value}>
                                <option value={'Furniture'} >Furniture</option>
                                <option value={'Crockery'}>Crockery</option>
                                <option value={'Electronics'}>Electronics</option>
                            </select> */}
                            <input type='text' defaultValue={modelObj[1]}  name="loanType" id="inputState" class="form-control" ref={loanType} onChange={(e)=>loanType.current=e.target.value} />
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                        <div class="form-group col-md-12 justify-content-center">
                            <label for="inputAddress">Duration</label>
                            <input required type="number" defaultValue={modelObj[2]} name="duration" class="form-control" id="inputAddress" placeholder="Duration" ref={duration} onChange={(e) => duration.current = e.target.value} />
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
            <ToastContainer />
            <h1 className={`r text-warning ${styles.head}`}>Loan Data</h1>
            <div className={styles.navBar} >

                <InputGroup className={styles.searchBar} onChange={(x) => search(x.target.value)}>
                    <Form.Control className={styles.searchInput}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder='Search'
                    />
                </InputGroup>
                <button className={`bg-danger text-warning fw-bold ${styles.btn}`} onClick={previousPage}>{'<'}</button>
                {focus && <> <input onTouchEndCapture={() => setFocus(false)} onBlur={() => setFocus(false)} type='text' onChange={(e) => { searchPage(e.target.value) }} className={`${styles.page}`} defaultValue={1}></input> <span>/{pageNation.length}</span> </>}
                {!focus && <span onClick={() => setFocus(true)}>{pageNumber + 1}/{pageNation.length}</span>}
                <button className={`bg-danger text-warning fw-bold ${styles.btn}`} onClick={nextPage}>{'>'}</button>
            </div>

            <ViewTable keys={keys} values={displayValue} deleteHandler={deleteHandler} modelHandler={openModel} />

        </div>
    );
}