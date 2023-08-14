
import React from 'react';
import styles from './styles.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { ViewTable } from '../../ViewTable';


let value = [
    {

        employeeID: 'L001',
        employeeName: 'Raja',
        designatio: 'Program associate',
        department: 'ECE',
        birthDate: '1/1/2001',
        joinDate: '1/1/2001',
        gender: 'Naan Binary',


    }, {

        employeeID: 'L002',
        employeeName: 'Rja',
        designatio: 'Program associate',
        department: 'ECE',
        birthDate: '1/1/2001',
        joinDate: '1/1/2001',
        gender: 'Naan Binary',


    },
    {

        employeeID: 'L0011',
        employeeName: 'Akash',
        designatio: 'Program associate',
        department: 'ECE',
        birthDate: '1/1/2001',
        joinDate: '1/1/2001',
        gender: 'Naan Binary',


    },
    {

        employeeID: 'L0201',
        employeeName: 'Manu',
        designatio: 'Program associate',
        department: 'ECE',
        birthDate: '1/1/2001',
        joinDate: '1/1/2001',
        gender: 'Naan Binary',


    },
    {

        employeeID: 'L0021',
        employeeName: 'Kumar',
        designatio: 'Program associate',
        department: 'ECE',
        birthDate: '1/1/2001',
        joinDate: '1/1/2001',
        gender: 'Naan Binary',


    },
]
let keys = ['Employee ID', 'Employee Name', 'Designation', 'Department', 'Birth Date', 'Join Date', 'Gender', 'Actions']

export function ViewCustomerData() {
    function ObjectToArray(val) {
        let res = [];
        for (let i of val) {
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
                if (i.employeeName.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || i.employeeID.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
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
            <ViewTable keys={keys} values={displayValue} />
        </div>
    );
}