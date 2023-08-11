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
       
        itemId: 'L001',
        descrption: 'Hammer',
        status: ' associate',
        make: 'wood',
        valuation:'2000',
     Category:'Home',
    },  {
        
        itemId: 'L2001',
        descrption: 'Hat',
        status: ' associate',
        make: 'wood',
        valuation:'2000',
     Category:'Home',
    }, 
    {
        
        itemId: 'L009',
        descrption: 'Cooker',
        status: ' associate',
        make: 'wood',
        valuation:'2000',
     Category:'Home',
    }, 
    {
        
        itemId: 'L0201',
        descrption: 'Dog',
        status: ' associate',
        make: 'wood',
        valuation:'2000',
     Category:'Home',
    }, 

]
let keys=['Item ID', 'Descrption', 'Status', 'Make', 'Valuation', 'Category', 'Actions']
export function ViewItemsData() {

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
                if (i.descrption.toLocaleLowerCase().includes(query.toLocaleLowerCase())|| i.itemId.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
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

            <ViewTable keys={keys} values={displayValue}/>
        </div>
    );
}