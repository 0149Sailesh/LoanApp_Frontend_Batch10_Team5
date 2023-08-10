import Table from 'react-bootstrap/Table';
import React from 'react';
import styles from './styles.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useEffect } from 'react';
let value = [
    {
        id: 1,
        employeeID: 'L001',
        employeeName: 'Raja',
        designatio: 'Program associate',
        department: 'ECE',
        birthDate:'1/1/2001',
        joinDate:'1/1/2001',
        gender:'Naan Binary',


    },  {
      id: 2,
      employeeID: 'L002',
      employeeName: 'Rja',
      designatio: 'Program associate',
      department: 'ECE',
      birthDate:'1/1/2001',
      joinDate:'1/1/2001',
      gender:'Naan Binary',


  },
  {
    id: 3,
    employeeID: 'L0011',
    employeeName: 'Akash',
    designatio: 'Program associate',
    department: 'ECE',
    birthDate:'1/1/2001',
    joinDate:'1/1/2001',
    gender:'Naan Binary',


},
{
  id: 4,
  employeeID: 'L0201',
  employeeName: 'Manu',
  designatio: 'Program associate',
  department: 'ECE',
  birthDate:'1/1/2001',
  joinDate:'1/1/2001',
  gender:'Naan Binary',


},
  {
        id: 5,
        employeeID: 'L0021',
        employeeName: 'Kumar',
        designatio: 'Program associate',
        department: 'ECE',
        birthDate:'1/1/2001',
        joinDate:'1/1/2001',
        gender:'Naan Binary',


    },
]

export function ViewCustomerData() {

    const [displayValue, setDisplayValue] = useState(value)


    function search(query) {
        let res = [];
        if (query !== '') {

            for (let i of value) {
                //console.log(i);
                if (i.employeeName.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
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

            <Table striped bordered hover responsive='md'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Gender</th>
                        <th>  Birth Date </th>
                        <th>Joining Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayValue.map(x =>
                        <tr key={x.id}>
                            <td>{x.employeeID}</td>
                            <td>{x.employeeName}</td>
                            <td>{x.designatio}</td>
                            <td>{x.department}</td>
                            <td>{x.gender}</td>
                            <td>{x.birthDate}</td>
                            <td>{x.joinDate}</td>

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