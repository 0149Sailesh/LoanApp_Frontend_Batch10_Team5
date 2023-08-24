import Table from 'react-bootstrap/Table';
import React from 'react';
import styles from './style.module.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import { useEffect } from 'react';
import { ViewTable } from '../../ViewTable';
import { GetEmployeePurchased } from '../../request';
import { DeleteItem } from '../../request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LocalModel from '../../Model';
import { EditItem } from '../../request';
import Button from 'react-bootstrap/Button';
let keys = ['Issue ID', 'Description', 'Make', 'Category', 'Valuation']
export function ViewPurchasedItems() {
  const [modelState, setModelState] = useState({})
  const [viewModle, setViewModel] = useState(false)
  const [pageNumber, setPageNumber]= useState(0);
  const [pageNation, setPageNation]=useState([]);
  const GetEmployeeId = ()=>{
    let userDet = localStorage.getItem('user');
    console.log(userDet)
    userDet = JSON.parse(userDet);
   
    let employeeId = userDet.employee_Id;
    console.log(employeeId)
    return employeeId
  }
  const FetchAllItems = async () => {
    console.log("Fetch function called")

    const res = await GetEmployeePurchased(GetEmployeeId());

    console.log("Response values", res.data)
    let pageArr=[];
    let onepage=[];
    let i=0;
     for (let r of res.data){
         if(i===5){
 
           pageArr.push(onepage);
           onepage=[];
           onepage.push(r)
           i=0;
         }
         else {
           onepage.push(r);
           i++;
         }
     }
     if(onepage.length!==0){
       pageArr.push(onepage);
     }
    setGlobalValue(res.data)
    ObjectToArray(pageArr[0])
    setPageNation(pageArr)
  }
  function searchPage(value){
    let  val =  Number(value);
     val--
       if(val>=0 && val<pageNation.length){
         ObjectToArray(pageNation[val]);
         setPageNumber(val)
       }
       else{
         if(value!=='')
         toast.error('Enter Valid Page Number')
 
         ObjectToArray(pageNation[0]);
         setPageNumber(0)
         
       }
   }
 

  function openModel(val) {
    setModelState(val);
    setViewModel(true)
  }
  function closeModel() {
    setViewModel(false);
  }
  const editComponent = () => {
    return (
      <div></div>
    )
  }
  const deleteHandler = async (id) => {
    try {
      const resp = await DeleteItem(id)
      console.log(resp)
      toast.success('Item deleted sucessfully!')
      FetchAllItems()
    } catch (e) {

    }



  }
  function ObjectToArray(val) {
    let res = [];
    for (let i of val) {
      res.push(Object.values(i));
    }
    setDisplayValue(res);

    console.log(res)
  }

  const [focus , setFocus]  = useState(false)
  const [displayValue, setDisplayValue] = useState([])
  const [value, setGlobalValue] = useState([])
  useEffect(() => {
    FetchAllItems()
    //ObjectToArray(value);
  }, []);

  function nextPage(){
    if(pageNumber+1< pageNation.length){
      
      ObjectToArray(pageNation[pageNumber+1]);
      setPageNumber(pageNumber+1);
    }
    else{
      setPageNumber(0);
      ObjectToArray(pageNation[0])
    }
  }
  function previousPage(){
    if(pageNumber-1>=0){
      
      ObjectToArray(pageNation[pageNumber-1]);
      setPageNumber(pageNumber-1);
    }
    else{
      setPageNumber(pageNation.length-1);
      ObjectToArray(pageNation[pageNation.length-1])
    }
  }
  function search(query) {
    let res = [];
    if (query !== '') {
      console.log("For query", value)
      for (let i of value) {
        //console.log(i);
        if (i.item_Description.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || i.issue_Id.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
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
      {viewModle && <LocalModel childComponent={editComponent} closeModel={closeModel} heading={`Edit model for item :${modelState[0]}`}></LocalModel>}

      <ToastContainer />
      <h1 className={`r text-warning ${styles.head}`}>Items Data</h1>
      <div className={styles.navBar} >

        <InputGroup className={styles.searchBar} onChange={(x) => search(x.target.value)}>
          <Form.Control className={styles.searchInput}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder='Search'
          />
        </InputGroup>
        <button className={`bg-danger text-warning fw-bold ${styles.btn}`} onClick={previousPage}>{'<'}</button>
       {focus && <> <input onTouchEndCapture={()=>setFocus(false)} onBlur={()=>setFocus(false)} type='text' onChange={(e)=>{searchPage(e.target.value)}} className={`${styles.page}`}  defaultValue={1}></input> <span>/{pageNation.length}</span> </>}
    { !focus &&   <span onClick={()=>setFocus(true)}>{pageNumber+1}/{pageNation.length}</span> }
        <button className={`bg-danger text-warning fw-bold ${styles.btn}`} onClick={nextPage}>{'>'}</button>
      </div>

      <ViewTable keys={keys} values={displayValue} deleteHandler={deleteHandler} modelHandler={openModel} showButton={false} />

    </div>
  );
}