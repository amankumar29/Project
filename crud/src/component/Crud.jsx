import React, { useState } from 'react'
import Table from './Table'

const Crud = () => {
    const[name,setName]= useState("daf")
    const[email,setEmail]= useState("")
    const[mobile,setMobile]= useState(" ")
    const[task,setTask]= useState(" ")
    const[id,setId]=useState(1)
    const[submitData,setSubmitData]= useState([])
    // console.log("name here=>",name);
    const onSubmit=(e)=>{
        e.preventDefault();
        // console.log("check");
        // console.log(e.target.value);
        setId(id+1);
        const data={
            id:id,
            name:name,
            email:email,
            mobile:mobile,
            task:task
        }
        // console.log("data here-->",data);
        setSubmitData([...submitData,data])
    }
    // console.log(submitData);
    


    return (
        <>
        {/* <h6>{JSON.stringify(submitData)}</h6> */}
            <h1>CRUD Apps</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='Enter Your Name' 
                        onChange={e=>setName(e.target.value)} />
                <br/> <br/>
                <input type="text" placeholder='Enter Your Email'
                        onChange={e=>setEmail(e.target.value)} />
                <br/> <br/>
                <input type="text" placeholder='Enter Your Mobile'
                        onChange={e=>setMobile(e.target.value)} />
                <br/> <br/>
                <input type="text" placeholder='Enter Your Task'
                        onChange={e=>setTask(e.target.value)} />
                <br/> <br/>
                <input type="submit" value="Save" />
                <input type="reset" value="Clear" />

            </form>
            <Table data={submitData}/>
        </>
    )
}

export default Crud
