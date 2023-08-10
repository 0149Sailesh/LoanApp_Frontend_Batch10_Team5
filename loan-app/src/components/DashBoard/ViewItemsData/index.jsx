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
        itemId: 'L001',
        descrption: 'Hammer',
        status: ' associate',
        make: 'wood',
        valuation:'2000',
     Category:'Home',
    },  {
        id: 2,
        itemId: 'L2001',
        descrption: 'Hat',
        status: ' associate',
        make: 'wood',
        valuation:'2000',
     Category:'Home',
    }, 
    {
        id: 3,
        itemId: 'L009',
        descrption: 'Cooker',
        status: ' associate',
        make: 'wood',
        valuation:'2000',
     Category:'Home',
    }, 
    {
        id: 4,
        itemId: 'L0201',
        descrption: 'Dog',
        status: ' associate',
        make: 'wood',
        valuation:'2000',
     Category:'Home',
    }, 

]

export function ViewItemsData() {

    const [displayValue, setDisplayValue] = useState(value)


    function search(query) {
        let res = [];
        if (query !== '') {

            for (let i of value) {
                //console.log(i);
                if (i.descrption.toLocaleLowerCase().includes(query.toLocaleLowerCase())|| i.itemId.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
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
            <h1 className={`r text-warning ${styles.head}`}>Items Data</h1>
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
                        <th>Item ID</th>
                        <th> Description</th>
                        <th>Make</th>
                        <th>Status</th>
                        <th>Category</th>
                        <th>  Valuation  </th>
                        
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayValue.map(x =>
                        <tr key={x.id}>
                            <td>{x.itemId}</td>
                            <td>{x.descrption}</td>
                            <td>{x.make}</td>
                            <td>{x.status}</td>
                            <td>{x.Category}</td>
                            <td>{x.valuation}</td>
                            

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