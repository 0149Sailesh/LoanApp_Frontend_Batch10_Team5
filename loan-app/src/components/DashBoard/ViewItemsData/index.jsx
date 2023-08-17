import Table from 'react-bootstrap/Table';
import React from 'react';
import styles from './style.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { ViewTable } from '../../ViewTable';
import { GetAllItems } from '../../request';


let keys=['Item ID', 'Descrption', 'Status', 'Make', 'Category', 'Valuation', 'Actions']
export function ViewItemsData() {
    const FetchAllItems = async ()=>{
        console.log("Fetch function called")
        const res = await GetAllItems();
        console.log("Response values", res.data)
        setGlobalValue(res.data)
        ObjectToArray(res.data)
    }

    function ObjectToArray(val){
        let res=[];
        for (let i of val){
            res.push(Object.values(i));
        }
        setDisplayValue(res);
       
        console.log(res)
    }


    const [displayValue, setDisplayValue] = useState([])
    const [value, setGlobalValue] = useState([])
    useEffect(() => {
        FetchAllItems()
        //ObjectToArray(value);
      }, []);


    function search(query) {
        let res = [];
        if (query !== '') {
            console.log("For query", value)
            for (let i of value) {
                //console.log(i);
                if (i.item_Description.toLocaleLowerCase().includes(query.toLocaleLowerCase())|| i.item_Id.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
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