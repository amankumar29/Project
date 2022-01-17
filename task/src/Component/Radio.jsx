import React from 'react'

const Radio = () => {
    return (
        <>
            <div className="form-check form-check-inline col-md-2">
  <input className="form-check-input" type="radio" data="done2" name="inlineRadioOptions" value="option1"/>
  <label >Planned</label>
</div>
<div className="form-check form-check-inline col-md-2">
  <input className="form-check-input" type="radio" data="done1" name="inlineRadioOptions" value="option2"/>
  <label>In-Progress</label>
</div>
<div className="form-check form-check-inline col-md-2">
  <input className="form-check-input" type="radio" data="doen" name="inlineRadioOptions" value="option3" />
  <label >Done</label>
</div>
        </>
    )
}

export default Radio
