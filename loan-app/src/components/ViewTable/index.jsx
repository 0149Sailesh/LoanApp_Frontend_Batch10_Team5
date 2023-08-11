
import Table from 'react-bootstrap/Table';
import React from 'react';
import styles from './styles.module.css';

import { useState } from 'react';
import { useEffect } from 'react';

export function ViewTable({keys, values}) {

    // const [displayValue, setDisplayValue] = useState(value)

    return (
        <div className='container'>
            <Table striped bordered hover responsive='md'>
                <thead>
                    <tr>
                        {keys.map(k=><th key={Date.now()}>{k}</th>)}
                        {/* <th>Loan ID</th>
                        <th>Loan Type</th>
                        <th>Duration</th>
                        <th> Card Issue Date </th>
                        <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {values.map(value =>
                        <tr key={value[0]}>
                            {value.map(x=> <td key={Date.now()}>{x}</td>)}
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