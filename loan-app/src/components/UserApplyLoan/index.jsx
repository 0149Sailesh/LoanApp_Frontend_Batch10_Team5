import React, { useState, useEffect } from "react";
import GeneralNav from "../Navbar/GeneralNav";
import SideMenu from "../SideMenuUser";
import styles from './styles.module.css';

import { GetAllItems } from "../request";
function UserLoanApply() {

    
    const [category, setCategory] = useState({});
    const [make, setMake] = useState({});
    const [displaymake, setDisplayMake] = useState([]);
    const [displayValue, setDisplayValue] = useState('');
    const [displayDes, setDisplayDes] = useState([]);
    const [isValue, setIsValue]= useState(false);
    const [isdes, setIsDes]= useState(false);
    const [isMake, setIsMake]=useState(false)
    useEffect(async () => {
        const res = await GetAllItems();
        console.log(res.data)
        let cat = {};
        let make = {}

        for (let r of res.data) {
            if (cat[`${r.item_Category}`] === undefined) {
                let arr = []
                arr.push(r.item_Make)
                cat[`${r.item_Category}`] = arr;
            }
            else {
                let arr = [];
                arr = cat[`${r.item_Category}`];
                if (arr.findIndex((i) => i === r.item_Make) === -1) {
                    arr.push(r.item_Make)
                    cat[`${r.item_Category}`] = arr;
                }

            }
            if (make[`${r.item_Make}`] === undefined) {
                let arr = []
                arr.push([r.item_Valuation, r.item_Description])
                make[`${r.item_Make}`] = arr;
            }
            else {
                let arr = [];
                arr = make[`${r.item_Make}`];
                arr.push([r.item_Valuation, r.item_Description])
                make[`${r.item_Make}`] = arr;
            }
        }
        console.log(cat)
        console.log(make)
        setMake(make);
        setCategory(cat);
      
        setDisplayMake(cat[`${res.data[0].item_Category}`]);
        // setDisplayValue(Object.values(make)[0][0][0]);
    //    console.log(Object.values(make)[0][0][0])
    //     setDisplayDes(Object.values(make)[0]);


    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.empId.value)

        let formData = {
            employeeId: e.target.empId.value,
            itemCategory: e.target.itemCategory.value,
            itemDescription: e.target.itemDescription.value,
            itemValue: Number(e.target.itemValue.value),
            itemMake: e.target.itemMake.value
        }

        console.log(formData)
    }
    return (
        <div style={{

            height: '100vh',
            backgroundImage: "url(" + "/icons/newwf.png" + ")",
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <GeneralNav></GeneralNav>
            <SideMenu></SideMenu>
            <h2 class="text-warning">Loan Application</h2>
            <div className={`container text-white ${styles.formContainer}`}>

                <form className={`${styles.loanForm}`} onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Employee id</label>
                            <input required type="text" name="empId" class="form-control" id="inputEmail4" placeholder="Employee id" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Item Category</label>
                            <select name="itemCategory" id="inputState" class="form-control" onChange={(e)=>{setDisplayMake(category[`${e.target.value}`]); setIsDes(false); setIsValue(false);setIsMake(false); setDisplayDes([]); setDisplayValue('')}}>
                                {Object.keys(category).map((i) => <option value={i}>{i}</option>)}
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">

                        <div class="form-group col-md-12">
                            <label for="inputState2">Item Make</label>
                            <select id="inputState2" name="itemMake" class="form-control" onChange={(e)=>{setDisplayDes(make[`${e.target.value}`]);  setIsMake(true); setIsDes(false); setDisplayValue(''); setIsValue(false)}}>
                            {!isMake && <option selected>Select Make</option>}
                                {displaymake.map((i) => <option value={i}>{i}</option>)}
                                
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="des">Item Description</label>
                        <select id="des" name="des" class="form-control" onChange={(e)=>{setDisplayValue(e.target.value); setIsValue(true);setIsDes(true)}}>
                        {!isdes && displayDes.length===0&& <option selected>Select Make to view Description</option>}
                               {!isdes && displayDes.length>0 && <option selected>Select Item Description</option>}
                                {displayDes.length>0&& displayDes.map(( x) => <option value={x[0]}>{x[1]}</option>)}
                            </select>
                    </div>
                    <br></br>

                    <div class="row">
                        <div class="form-group col-md-12">
                            <label for="inputCity">Item value</label>
                            <input disabled value={isValue?displayValue:"NIL"} required type="text" name="itemValue" class="form-control" id="inputCity" />
                        </div>
                        <br></br>
                    </div>
                    <div className={`${styles.buttonContainer}`}>
                        <button type="submit" class="btn text-warning bg-danger">Apply loan</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default UserLoanApply;
