
import Table from 'react-bootstrap/Table';
import React from 'react';
import styles from './style.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { ViewTable } from '../../ViewTable';
let value = [
    {
       
        loadId: 'L001',
        loanType: 'Furniture',
        duration: 5,
        issueDate: '1/1/2001'

    },
    {
     
        loadId: 'L001',
        loanType: 'Furchairniture',
        duration: 5,
        issueDate: '1/1/2001'

    },
    {
        
        loadId: 'L001',
        loanType: 'Furniture',
        duration: 5,
        issueDate: '1/1/2001'

    },
    {
       
        loadId: 'L001',
        loanType: 'Furniture',
        duration: 3,
        issueDate: '1/1/2001'

    },
    {
       
        loadId: 'L001',
        loanType: 'Homw',
        duration: 6,
        issueDate: '1/1/2001'

    },
]
let keys=['Loan ID', 'Loan Type', 'Duration', 'Issue Date', 'Actions']

export function ViewLoanTable() {

    function ObjectToArray(val){
        let res=[];
        for (let i of val){
            res.push(Object.values(i));
        }
        setDisplayValue(res);
        console.log(res)
    }


    const [displayValue, setDisplayValue] = useState([])
    useEffect(() => {
     
        ObjectToArray(value);
      }, []);


    function search(query) {
        let res = [];
        if (query !== '') {

            for (let i of value) {
                //console.log(i);
                if (i.loadId.toLocaleLowerCase().includes(query.toLocaleLowerCase())|| i.loanType.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
                    res.push(Object.values(i));
            }
            setDisplayValue(res)

        }
        else {
                    ObjectToArray(value);
        }

        console.log(res)
    }



    return (
        <div className='container'>
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

            <ViewTable keys={keys} values={displayValue}/>
        </div>
    );
}