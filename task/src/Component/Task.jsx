import React from 'react'

const Task = () => {
    return (
        <>
            <h1 style={{textAlign:"center"}}>To-Do-List</h1>
            <form style={{marginLeft:"360px"}} >
            <div className="form-row">
            <div className="form-group col-md-8">
            <input type="text" className="form-control" placeholder="Enter Person Name" />
            </div>
            
            </div> 
            <div className="form-row">
            <div className="form-group col-md-4">
            <input type="email" className="form-control" placeholder="Enter A Valid E-mail ID" />
            </div>
            <div className="form-group col-md-4">
            <input type="number" className="form-control"  placeholder="Enter A Valid Mobile Number" />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-8">
            <input type="text" className="form-control" placeholder="Enter Project Name"  />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-8">
            <input type="text" className="form-control" placeholder="Enter Task Description" />
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-4">
            <input type="date" className="form-control" />
            
            </div>
            <div className="form-group col-md-4">
            <input type="date" className="form-control" />
            </div>
            </div>
            <div className="form-row">
                <div className="col-md-2">
                    <h6> Task Status </h6>
                </div>
            <div className="form-check form-check-inline col-md-2">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" for="inlineRadio1">Planned</label>
</div>
<div className="form-check form-check-inline col-md-2">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" for="inlineRadio2">In-Progress</label>
</div>
<div className="form-check form-check-inline col-md-2">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
  <label className="form-check-label" for="inlineRadio3">Done</label>
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
        </>
    )
}

export default Task
