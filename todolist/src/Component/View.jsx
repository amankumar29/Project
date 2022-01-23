import React, { useEffect, useState } from "react";
import Edit from "./Edit";
import { useForm } from "react-hook-form";

const Todolist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [project, setProject] = useState("");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [id, setId] = useState(1);
  const [submitData, setSubmitData] = useState([]);

  const [defaultData, setDefaultData] = useState(false);
  const [plannedData, setPlannedData] = useState(false);
  const [progressData, setProgressData] = useState(false);
  const [doneData, setDoneData] = useState(false);
  const [view, setView] = useState(false);
  const [save, setSave] = useState(false);

  const [data, setData] = useState(submitData);

  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const onSubmit = (e) => {
    // e.preventDefault();

    reset();

    setId(id + 1);
    const data = {
      id: id,
      name: name,
      email: email,
      mobile: mobile,
      project: project,
      task: task,
      status: status,
      start: start,
      end: end,
    };
    setSubmitData([...submitData, data]);
  };

  // to delete

  const deleteItem = (id) => {
    const deleteData = data.filter((cur) => {
      return cur.id !== id;
    });
    setData(deleteData);
  };
  /* useEffect(()=>{
    deleteItem();
  },[]) */

  const pData =
    submitData &&
    submitData.length > 0 &&
    submitData.filter((data) => data.status === "Planned");

  const iData =
    submitData &&
    submitData.length > 0 &&
    submitData.filter((data) => data.status === "In-Progress");

  const dData =
    submitData &&
    submitData.length > 0 &&
    submitData.filter((data) => data.status === "Done");

  useEffect(() => {
    if (view && status === "Planned") {
      setData(pData);
    } else if (view && status === "In-Progress") {
      setData(iData);
    } else if (view && status === "Done") {
      setData(dData);
    }
  }, [view, status]);

  useEffect(() => {
    if (save === true) {
      setData(submitData);
    }
  }, [save, submitData]);

  console.log("data", data);
  console.log("save", save);
  // console.log("data", data);

  return (
    <>
      {/* <h6>{JSON.stringify(submitData)}</h6> */}
      <h1 style={{ textAlign: "center" }}>To-Do-List</h1>
      <form style={{ marginLeft: "360px" }} onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              placeholder="Enter Person Name"
              className={`form-control $ {errors.name && "invalid"}`}
              {...register("name", {
                required: "Name is Required",
                minLength: {
                  value: 3,
                  message: "Atleast 3 character required",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 character allowed",
                },
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Only alphabets are allowed",
                },
              })}
              onKeyUp={() => {
                trigger("name");
              }}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="email"
              placeholder="Enter A Valid Email ID "
              className={`form-control $ {errors.email && "invalid"}`}
              {...register("email", {
                required: "Email is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "@ is missing",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              placeholder="Enter A Valid Mobile Number "
              className={`form-control $ {errors.mobile && "invalid"}`}
              {...register("mobile", {
                required: "Mobile Number is Required",
                minLength: {
                  value: 10,
                  message: "Only 10 Digit Mobile Number are allowed",
                },
                maxLength: {
                  value: 10,
                  message: "Only 10 Digit Mobile Number are allowed",
                },
                pattern: {
                  value: /^(?!0.)\d+$/,
                  message: "Mobile number should Not be start from '0'",
                },
              })}
              onKeyUp={() => {
                trigger("mobile");
              }}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && (
              <small className="text-danger">{errors.mobile.message}</small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              placeholder="Enter Project Name "
              className={`form-control $ {errors.project && "invalid"}`}
              {...register("project", {
                required: "Project name is Required",
                minLength: {
                  value: 3,
                  message: "Atleast 3 character required",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum 20 character allowed",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-\s]*$/,
                  message: "Only alphabets are allowed",
                },
              })}
              onKeyUp={() => {
                trigger("project");
              }}
              onChange={(e) => setProject(e.target.value)}
            />
            {errors.task && (
              <small className="text-danger">{errors.project.message}</small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input
              type="text"
              placeholder="Enter Task Description "
              className={`form-control $ {errors.task && "invalid"}`}
              {...register("task", {
                required: "Task description is Required",
                minLength: {
                  value: 3,
                  message: "Atleast 3 character required",
                },
                maxLength: {
                  value: 30,
                  message: "Maximum 30 character allowed",
                },
              })}
              onKeyUp={() => {
                trigger("task");
              }}
              onChange={(e) => setTask(e.target.value)}
            />
            {errors.task && (
              <small className="text-danger">{errors.task.message}</small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label>Start Date</label>
            <input
              type="date"
              placeholder="Start Date "
              className={`form-control $ {errors.start && "invalid"}`}
              {...register("start", { required: "Mention Start Date" })}
              onKeyUp={() => {
                trigger("start");
              }}
              onChange={(e) => setStart(e.target.value)}
            />
            {errors.start && (
              <small className="text-danger">{errors.start.message}</small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label>Target Date</label>
            <input
              type="date"
              placeholder="Target Date "
              className={`form-control $ {errors.end && "invalid"}`}
              {...register("end", { required: "Mention Target Date" })}
              onKeyUp={() => {
                trigger("end");
              }}
              onChange={(e) => setEnd(e.target.value)}
            />
            {errors.end && (
              <small className="text-danger">{errors.end.message}</small>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-2">
            <h6>Task Status</h6>
          </div>
          <div className="form-check form-check-inline col-md-2">
            <input
              type="radio"
              data="label1"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              onChange={(e) => {
                setStatus("Planned");
                setDefaultData(false);
                setPlannedData(true);
                setProgressData(false);
                setDoneData(false);
              }}
            />
            <label className="form-check-label" for="inlineRadio1">
              Planned
            </label>
          </div>
          <div className="form-check form-check-inline col-md-2">
            <input
              type="radio"
              data="label2"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              onChange={() => {
                setStatus("In-Progress");
                 setDefaultData(false);
                setPlannedData(false);
                setProgressData(true);
                setDoneData(false);
              }}
            />
            <label className="form-check-label" for="inlineRadio2">
              In-Progress
            </label>
          </div>
          <div className="form-check form-check-inline col-md-2">
            <input
              type="radio"
              data="label3"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
              onChange={() => {
                setStatus("Done");
                setDefaultData(false);
                setPlannedData(false);
                setProgressData(false);
                setDoneData(true);
              }}
            />
            <label className="form-check-label" for="inlineRadio3">
              Done
            </label>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <button
              type="submit"
              onClick={() => {
                setSave(true);
                setView(false);
              }}
              className="btn-btn-primary"
            >
              Save
            </button>
          </div>
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <button
              onClick={() => {
                setView(true);
              }}
              className="btn-btn-danger"
            >
              View
            </button>
          </div>
        </div>
      </form>

      <talbe className="table mt-3 " style={{ marginLeft: "center" }}>
        <thead className="thead-light">
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Project</th>
            <th>Task</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((ele, index) => {
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
                      onClick={() => {
                        setShowModal(true);
                        setEditId(index);
                      }}
                      style={{ cursor: "pointer" }}
                    ></i>
                    <i
                      className="mr-4 fas fa-trash-alt"
                      onClick={() => deleteItem(ele.id)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </talbe>

      {showModal && (
        <Edit
          submitData={data}
          id={editId}
          setSubmitData={setSubmitData}
          showModal={showModal}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Todolist;
