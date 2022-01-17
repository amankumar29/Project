import React, { useState } from 'react'

const Todolist = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")
    const [project,setProject] = useState("")
    const [task,setTask] = useState("")
    const [status,setStatus] = useState("")
    const [start,setStart] = useState("")
    const [end,setEnd] = useState("")
    const [id,setId] = useState(1)
    const [submitData,setSubmitData] = useState([])
    
    const onSubmit=(e)=>{
        e.preventDefault();
        
        setId(id+1);
        const data={
            id:id,
            name:name,
            email:email,
            mobile:mobile,
            project:project,
            task:task,
            status:status,
            start:start,
            end:end
        }
        setSubmitData([...submitData,data])

    }
    // const [name,setName] = useState("")
            // to delete the items

        const deleteItem = (id)=>{
            console.log("click id",id);
            const deleteData = submitData.filter((cur)=>{
                return cur.id!==id
            })
            setSubmitData(deleteData)
        }   
    return (
        <>
        {/* <h6>{JSON.stringify(submitData)}</h6> */}
            <h1 style={{textAlign:"center"}}>To-Do-List</h1>
            <form style={{marginLeft:"360px"}} onSubmit={onSubmit}>
            <div className="form-row">
            <div className="form-group col-md-8">
            <input type="text" className="form-control" placeholder="Enter Person Name"
                   onChange={e=>setName(e.target.value)}  />
            </div>
            </div> 
            <div className="form-row">
            <div className="form-group col-md-4">
            <input type="email" className="form-control" placeholder="Enter A Valid E-mail ID"  onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group col-md-4">
            <input type="number" className="form-control"  placeholder="Enter A Valid Mobile Number" onChange={e=>setMobile(e.target.value)} />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-8">
            <input type="text" className="form-control" placeholder="Enter Project Name"  onChange={e=>setProject(e.target.value)}/>
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-8">
            <input type="text" className="form-control" placeholder="Enter Task Description" onChange={e=>setTask(e.target.value)}/>
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-4">
            <input type="date" className="form-control" onChange={e=>setStart(e.target.value)} />
            
            </div>
            <div className="form-group col-md-4">
            <input type="date" className="form-control" onChange={e=>setEnd(e.target.value)}/>
            </div>
            </div>
            <div className="form-row">
                <div className="col-md-2">
                    <h6> Task Status </h6>
                </div>
            <div className="form-group col-md-2">
            <div className="form-group">
            <div className="form-check">
            <input className="form-check-input" type="radio" name="planned" onChange={e=>setStatus(e.target.name)}  value="option1"/>
            <label className="form-check-label">
            Planned
            </label>
            </div>
            </div>
            </div>
            <div className="form-group col-md-2">
            <div className="form-group">
            <div className="form-check">
            <input className="form-check-input" type="radio" name="In-Progress" onChange={e=>setStatus(e.target.name)}/>
            <label className="form-check-label">
            In-Progress
            </label>
            </div>
            </div>
            </div>
            <div className="form-group col-md-2">
            <div className="form-group">
            <div className="form-check">
            <input className="form-check-input" type="radio"  name="done" onChange={e=>setStatus(e.target.name)}/>
            <label className="form-check-label">
            Done
            </label>
            </div>
            </div>
            </div>
            </div>
            <div className="form-row">
            <div className="col-md-4" style={{textAlign:"center"}}>
            <button type="submit" className="btn btn-primary" >Save</button>
            </div>
            <div className="col-md-4" style={{textAlign:"center"}}>
            <button type="reset" className="btn btn-primary" >Clear</button>
            </div>
            </div>
            </form>

            <table className="table mt-3 col-md-8" style={{marginLeft:"240px"}}>
                <thead className="thead-light">
                    <tr>
                        <th>Sl.No.</th>
                        <th>Name</th>
                        <th>Project</th>
                        <th>Task.</th>
                        <th>Status</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {submitData.map((ele,index)=>{
                       const {id,name,project,task,status,start,end}=ele
                       return  <tr key={id}>
                       <td>{index+1}</td>
                       <td>{name}</td>
                       <td>{project}</td>
                       <td>{task}</td>
                       <td>{status}</td>
                       <td>{start}</td>
                       <td>{end}</td>
                       <td>
                        <i className="mr-4 fas fa-edit"
                        style={{cursor:"pointer"}}></i>
                        <i className="fas fa-trash-alt" 
                        onClick={()=> deleteItem(ele.id) } 
                        style={{cursor:"pointer"}}></i>
                        </td>
                   </tr>
                   })}
                </tbody>
            </table>
        </>

    
    )
}

export default Todolist
