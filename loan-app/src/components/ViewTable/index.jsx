
import Table from 'react-bootstrap/Table';
import React from 'react';
import styles from './styles.module.css';

import { useState } from 'react';
import { useEffect } from 'react';

export function ViewTable({keys, values,deleteHandler,modelHandler, showButton=true}) {
    console.log("Show button", showButton)
    // const [displayValue, setDisplayValue] = useState(value)
    const [item_id, setId] = useState('')
    return (
        <div>
        <div className={`container ${styles.medi}`}>
            <Table striped bordered hover className={styles.medi}>
              
                <thead>
                    <tr>
                        {keys.map(k=><th >{k}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {values.map(value =>
                        <tr>
                            {value.map(x=> <td  >{x}</td>)}
                            {
                                showButton ?  <td className={styles.actions}>
                                <button className={`bg-info text-white  ${styles.btnActions}`} onClick={()=>modelHandler(value)} >{'Edit'}</button>
                                <button className={` bg-danger text-white ${styles.btnActions}`} onClick={()=> deleteHandler(value[0])} >{'Delete'}</button>
                            </td>:''
                            }
                           
                        </tr>
                    )

                    }
                </tbody>
            </Table>
        </div>
        <div className={styles.res}>
            
                    {values.map(value =>
                        <div className={styles.resIn}>
                            {value.map((i, x)=> <div  className={styles.resRow}  ><span className='w-30'>{keys[x]}:</span> <span className=''>{i}</span></div>)}
                            {
                                showButton ?  <td className={styles.actions}>
                                <button className={`bg-info text-white mt-2  ${styles.btnActions}`} onClick={()=>modelHandler(value)} >{'Edit'}</button>
                                <button className={` bg-danger text-white mt-2 ${styles.btnActions}`} onClick={()=> deleteHandler(value[0])} >{'Delete'}</button>
                            </td>:''
                            }
                           
                        </div>
                    )

                    }
            

        </div>
        </div>
    );
}