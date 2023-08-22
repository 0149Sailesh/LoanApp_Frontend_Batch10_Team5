import React, { useState, useEffect } from "react";
import GeneralNav from "../Navbar/GeneralNav";
import SideMenu from "../SideMenuUser";
import styles from './styles.module.css';
import { ApplyLoan } from "../request";
import { GetAllItems } from "../request";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function UserLoanApply() {

    const [formData, setFormData]= useState({
        item_Category:'',
        item_Description:'',
        item_Make:'',
        item_Valuation:'',
        employee_Id:""
    })
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
            if (make[`${r.item_Make}${r.item_Category}`] === undefined) {
                let arr = []
                arr.push([r.item_Valuation, r.item_Description])
                make[`${r.item_Make}${r.item_Category}`] = arr;
            }
            else {
                let arr = [];
                arr = make[`${r.item_Make}${r.item_Category}`];
                arr.push([r.item_Valuation, r.item_Description])
                make[`${r.item_Make}${r.item_Category}`] = arr;
            }
        }
        console.log(cat)
        console.log(make)
        setMake(make);
        setCategory(cat);
        setFormData({...formData, item_Category:Object.keys(cat)[0]})
        setDisplayMake(cat[`${res.data[0].item_Category}`]);
        // setDisplayValue(Object.values(make)[0][0][0]);
    //    console.log(Object.values(make)[0][0][0])
    //     setDisplayDes(Object.values(make)[0]);


    }, [])
    function categoryHandler(e){
        setDisplayMake(category[`${e.target.value}`]); 
        setIsDes(false);
         setIsValue(false);
         setIsMake(false); 
         setDisplayDes([]); 
         setDisplayValue('') ;
         setFormData({...formData, item_Category:e.target.value , item_Description:'', item_Make:'', item_Valuation:''})
    }
    function makeHandler(e){
        setDisplayDes(make[`${e.target.value}${formData.item_Category}`]);
          setIsMake(true); 
          setIsDes(false); 
          setDisplayValue(''); 
          setIsValue(false);
          setFormData({...formData, item_Make:e.target.value, item_Description:'' , item_Valuation:''})
    }
function desHandler(e){
    console.log(e.target.value)
    let arr= e.target.value.split(',')
    setDisplayValue(arr[0]);
     setIsValue(true);
     setIsDes(true);
      setFormData({...formData, item_Description:arr[1], item_Valuation:arr[0]})

    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(e.target.empId.value)
        console.log(formData)
        try{
            let res = await ApplyLoan({
                employee_Id:'1234',
                item_Category:formData.item_Category,
                item_Description:formData.item_Description,
                item_Value: formData.item_Valuation,
                item_Make:formData.item_Make
            })
            console.log(res)
            toast.success('Application Successfully')
        }
        catch(e){
            toast.error('You are totally wrong ')
        }
       
       
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
            <ToastContainer/>
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
                            <select required name="itemCategory" id="inputState" class="form-control" onChange={(e)=>categoryHandler(e)}>
                                {Object.keys(category).map((i) => <option value={i}>{i}</option>)}
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">

                        <div class="form-group col-md-12">
                            <label for="inputState2">Item Make</label>
                            <select required id="inputState2" name="itemMake" class="form-control" onChange={(e)=>makeHandler(e)}>
                            {!isMake && <option selected>Select Make</option>}
                                {displaymake.map((i) => <option value={i}>{i}</option>)}
                                
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="des">Item Description</label>
                        <select required id="des" name="des" class="form-control" onChange={(e)=>desHandler(e)}>
                        {!isdes && displayDes.length===0&& <option selected>Select Make to view Description</option>}
                               {!isdes && displayDes.length>0 && <option selected>Select Item Description</option>}
                                {displayDes.length>0&& displayDes.map(( x) => <option value={x}>{x[1]}</option>)}
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
                        <button type="submit" class={displayValue===''?' bg-gray text-white btn' :'btn text-warning bg-danger'} disabled={displayValue===''}>Apply loan</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default UserLoanApply;
