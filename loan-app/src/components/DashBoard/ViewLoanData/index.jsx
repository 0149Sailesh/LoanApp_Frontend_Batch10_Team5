
import Table from 'react-bootstrap/Table';
import React from 'react';
import styles from './style.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useEffect } from 'react';
let value = [
    {
        id: 1,
        loadId: 'L001',
        loanType: 'Furniture',
        duration: 5,
        issueDate: '1/1/2001'

    },
    {
        id: 2,
        loadId: 'L001',
        loanType: 'Furchairniture',
        duration: 5,
        issueDate: '1/1/2001'

    },
    {
        id: 3,
        loadId: 'L001',
        loanType: 'Furniture',
        duration: 5,
        issueDate: '1/1/2001'

    },
    {
        id: 4,
        loadId: 'L001',
        loanType: 'Furniture',
        duration: 3,
        issueDate: '1/1/2001'

    },
    {
        id: 5,
        loadId: 'L001',
        loanType: 'Homw',
        duration: 6,
        issueDate: '1/1/2001'

    },
]

export function ViewLoanTable() {

    const [displayValue, setDisplayValue] = useState(value)


    function search(query) {
        let res = [];
        if (query !== '') {

            for (let i of value) {
                //console.log(i);
                if (i.loanType.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
                    res.push(i);
            }
            setDisplayValue(res);

        }
        else {
            setDisplayValue(value)
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

            <Table striped bordered hover responsive='md'>
                <thead>
                    <tr>
                        <th>Loan ID</th>
                        <th>Loan Type</th>
                        <th>Duration</th>
                        <th> Card Issue Date </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayValue.map(x =>
                        <tr key={x.id}>
                            <td>{x.loadId}</td>
                            <td>{x.loanType}</td>
                            <td>{x.duration}</td>
                            <td>{x.issueDate}</td>
                            <td className={styles.actions}>
                                <button className={`bg-info text-white  ${styles.btnActions}`}>{'Edit'}</button>
                                <button className={` bg-danger text-white ${styles.btnActions}`}>{'Delete'}</button>
                            </td>
                        </tr>
                    )

                    }
                </tbody>
            </Table>
        </div>
    );
}