import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Todolist = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [project, setProject] = useState("");
//   const [task, setTask] = useState("");
//   const [status, setStatus] = useState("");
//   const [start, setStart] = useState("");
//   const [end, setEnd] = useState("");
const [status,setStatus] = useState("")
  const [id, setId] = useState(1);
  const [submitData, setSubmitData] = useState([]);

  const validator = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/,"Numbers not allowd")
      .min(3, "Name must be greater than 3 charecters")
      .max(20, "Name must be less than 20 charecters")
      .required("Required"),
    email: yup.string().email("Must be a valid email").required("Requried"),
    mobile: yup
      .string()
      .matches(/^(?!0.)\d+$/,"must not start with 0")
      .min(6, "Mobile no must be greater than 6 digits")
      .max(10, "Mobile no must be lesss than  10 digits")
      .required("Requried"),
    project: yup
      .string()
      .min(3, "Project must be greater than 3 charecters")
      .max(20, "Project must be less than 20 charectrers")
      .required("Requried"),
    task: yup
      .string()
      .min(3, "Task ust be greater than 3 chare")
      .max(30, "max should be 30")
      .required("Required"),
    // status: yup.boolean().required("Required"),
    start: yup.date().required("Required"),
    end: yup.date().required("Requried"),
  });

  const formik=useFormik({
      initialValues:{
         name:"",
         email:"",
         mobile:"",
         project:"",
         task:"",
         
         start:"",
         end:"" 
      },
      validationSchema:validator,
      onSubmit:(values,{resetForm})=>{
          console.log("//submit here");
          setId(id + 1)
          setSubmitData([...submitData,values])
          resetForm()
      }
  })
  const newData=[];
  submitData.map((data,index)=>{
     return newData.push({id:index+1,...data})
  })
  console.log("submitted ",newData);

  const dataForSubmit=[]
  
  newData.map((data,index)=>{
    return dataForSubmit.push({status:status,...data})
 })
//   const onSubmit = (e) => {
//     e.preventDefault();
//     // formik.handleSubmit()
//     setId(id + 1);
//     const data = {
//       id: id,
//       name: name,
//       email: email,
//       mobile: mobile,
//       project: project,
//       task: task,
//       status: status,
//       start: start,
//       end: end,
//     };
//     setSubmitData([...submitData, data]);
//   };
  // const [name,setName] = useState("")
  // to delete the items

  const deleteItem = (id) => {
    console.log("click id", id);
    const deleteData = dataForSubmit.filter((cur) => {
      return cur.id !== id;
    });
    setSubmitData(deleteData);
  };
  return (
    <>
      {/* <h6>{JSON.stringify(submitData)}</h6> */}
      <h1 style={{ textAlign: "center" }}>To-Do-List</h1>
      <form style={{ marginLeft: "360px" }} onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Person Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            //   error={formik.touched.name ? Boolean(formik.errors.name) : undefined}
              helpertext={formik.touched.name && formik.errors.name}
            />
             {formik.errors.name ? <div>{formik.errors.name}</div> : null}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Enter A Valid E-mail ID"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            //   error={formik.touched.email ? Boolean(formik.errors.email) :undefined}
              helpertext={formik.touched.email && formik.errors.email}

              
            />
             {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          </div>
          <div className="form-group col-md-4">
            <input
            //   type="number"
              className="form-control"
              placeholder="Enter A Valid Mobile Number"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
            //   error={formik.touched.mobile ? Boolean(formik.errors.mobile) :undefined}
              helpertext={formik.touched.mobile && formik.errors.mobile}
            />
            {formik.errors.mobile ? <div>{formik.errors.mobile}</div> : null}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Project Name"
              name="project"
              value={formik.values.project}
              onChange={formik.handleChange}
            //   error={formik.touched.project ? Boolean(formik.errors.project):undefined}
              helpertext={formik.touched.project && formik.errors.project}
            />
            {formik.errors.project ? <div>{formik.errors.project}</div> : null}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Task Description"
              name="task"
              value={formik.values.task}
              onChange={formik.handleChange}
            //   error={formik.touched.task ? Boolean(formik.errors.task) :undefined}
              helpertext={formik.touched.task && formik.errors.task}
            />
            {formik.errors.task ? <div>{formik.errors.task}</div> : null}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="date"
              className="form-control"
              name="start"
              value={formik.values.start}
              onChange={formik.handleChange}
            //   error={formik.touched.start ? Boolean(formik.errors.start):undefined}
              helpertext={formik.touched.start && formik.errors.start}
            />
            {formik.errors.start ? <div>{formik.errors.start}</div> : null}
          </div>
          <div className="form-group col-md-4">
            <input
              type="date"
              className="form-control"
              name="end"
              value={formik.values.end}
              onChange={formik.handleChange}
            //   error={formik.touched.end ? Boolean(formik.errors.end) :undefined}
              helpertext={formik.touched.end && formik.errors.end}
            />
            {formik.errors.end ? <div>{formik.errors.end}</div> : null}
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-2">
            <h6> Task Status </h6>
          </div>
          <div className="form-group col-md-2">
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Planned"
                  value='option1'
                  onChange={e=>setStatus(...status,e.target.name)}
                //   error={formik.touched.status ? Boolean(formik.errors.status):undefined}
                //   helpertext={formik.touched.status && formik.errors.status}
                />
                
                <label className="form-check-label">Planned</label>
              </div>
            </div>
          </div>
          <div className="form-group col-md-2">
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="In-Progress"
                  value='option2'
                  onChange={e=>setStatus(...status,e.target.name)}
                //   error={formik.touched.status ? Boolean(formik.errors.status): undefined}
                //   helpertext={formik.touched.status && formik.errors.status}
                />
                {/* {formik.errors.status ? <div>{formik.errors.status}</div> : null} */}
                <label className="form-check-label">In-Progress</label>
              </div>
            </div>
          </div>
          <div className="form-group col-md-2">
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Done"
                  
                  onChange={e=>setStatus(...status,e.target.name)}
                //   error={formik.touched.status && Boolean(formik.errors.status)}
                //   helpertext={formik.touched.status && formik.errors.status}
                />
                {/* {formik.errors.status ? <div>{formik.errors.status}</div> : null} */}
                <label className="form-check-label">Done</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <button type="submit" onClick={formik.handleSubmit} className="btn btn-primary">
              Save
            </button>
          </div>
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <button type="reset" className="btn btn-primary">
              Clear
            </button>
          </div>
        </div>
      </form>

      <table className="table mt-3 col-md-8" style={{ marginLeft: "240px" }}>
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
          {dataForSubmit.map((ele, index) => {
            const { id, name, project, task, status, start, end } = ele;
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{project}</td>
                <td>{task}</td>
                <td>{status}</td>
                <td>{start}</td>
                <td>{end}</td>
                <td>
                  <i
                    className="mr-4 fas fa-edit"
                    style={{ cursor: "pointer" }}
                  ></i>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => deleteItem(ele.id)}
                    style={{ cursor: "pointer" }}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Todolist;
