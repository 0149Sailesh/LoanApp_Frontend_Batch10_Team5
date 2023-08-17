import Table from 'react-bootstrap/Table';
import React from 'react';
import styles from './style.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { ViewTable } from '../../ViewTable';
import { GetAllItems } from '../../request';
import { DeleteItem } from '../../request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocalModel from '../../Model';
import { EditItem } from '../../request';

let keys=['Item ID', 'Descrption', 'Status', 'Make', 'Category', 'Valuation', 'Actions']
export function ViewItemsData() {
    const [modelState, setModelState] = useState({})
    const [viewModle, setViewModel] = useState(false)
    const FetchAllItems = async ()=>{
        console.log("Fetch function called")
        const res = await GetAllItems();
        console.log("Response values", res.data)
        setGlobalValue(res.data)
        ObjectToArray(res.data)
    }

    const handleEdit = async(e) => {
        console.log("Submitttinggggggg")
        try{
          console.log("try block")
          e.preventDefault()
        
        let formData = {
          item_Id: e.target.itemId.value,
          item_Category: e.target.itemCategory.value,
          item_Description: e.target.itemDescription.value,
          item_Valuation: Number(e.target.itemValue.value),
          item_Make: e.target.itemMake.value,
          issue_Status: e.target.itemStatus.value
        }
        console.log("Form data is", formData)
        let res = await EditItem(formData)
        toast.success('Item Added Successfully')
        console.log(res)

        FetchAllItems()
        closeModel()
       
        } catch(e){
          console.log(e)
          toast.error('Invalid item data')
        }
        
      }
    function openModel() {
        setViewModel(true)
    }
    function closeModel() {
        setViewModel(false);
    }
    const editComponent = ()=>{
        return(
            <form className={`${styles.loanForm}`} onSubmit={handleEdit}>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Item id</label>
              <input required type="text" name="itemId" class="form-control" id="inputEmail4" placeholder="Item id" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">Item Category</label>
              <select name="itemCategory" id="inputState" class="form-control">
                <option selected>Furniture</option>
                <option>Crockery</option>
              </select>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="form-group col-md-9">
              <label for="inputAddress">Item Description</label>
              <input required type="text" name="itemDescription" class="form-control" id="inputAddress" placeholder="Item description" />
            </div>
            <div class="form-group col-md-3">
              <label for="inputState2">Status</label>
              <select id="inputState2" name="itemStatus" class="form-control">
                <option selected>S</option>
                <option>N</option>
              </select>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputCity">Item value</label>
              <input required type="text" name="itemValue" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputState2">Item Make</label>
              <select id="inputState2" name="itemMake" class="form-control">
                <option selected>Opt1</option>
                <option>Opt2</option>
              </select>
            </div>


          </div>
          
          <div className={`${styles.buttonContainer}`}>
            <button type="submit" class="btn text-warning fw-bold bg-danger">Update loan</button>
            <button onClick={()=> closeModel()} class="btn text-warning fw-bold bg-danger">Close</button>
          </div>
            </form>
        )
    }
    const deleteHandler = async (id) =>{
        try{
            const resp = await DeleteItem(id)
            console.log(resp)
            toast.success('Item deleted sucessfully!')
            FetchAllItems()
        } catch (e) {

        }
       


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
            {viewModle && <LocalModel childComponent={editComponent} closeModel={closeModel}></LocalModel>}

            <ToastContainer/>
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

            <ViewTable keys={keys} values={displayValue} deleteHandler={deleteHandler} modelHandler={openModel} />

        </div>
    );
}