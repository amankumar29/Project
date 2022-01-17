import React, { useState } from "react";
import { Modal } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
const Edit = ({ submitData, id, setSubmitData, showModal, closeModal }) => {
  console.log(submitData, id);
  const [name, setName] = useState(submitData[id].name);
  const [email, setEmail] = useState(submitData[id].email);
  const [mobile, setMobile] = useState(submitData[id].mobile);
  const [project, setProject] = useState(submitData[id].project);
  const [task, setTask] = useState(submitData[id].task);
  const [start, setStart] = useState(submitData[id].start);
  const [end, setEnd] = useState(submitData[id].end);
  const [status, setStatus] = useState(submitData[id].status);

  const save = (e) => {
    e.preventDefault();
    let newSubmitData = [...submitData];
    newSubmitData[id] = {
      name: name,
      email: email,
      mobile: mobile,
      project: project,
      task: task,
      start: start,
      end: end,
      status: status,
    };

    setSubmitData([...newSubmitData]);
    closeModal();
  };

  return (
    <Modal open={showModal} onClose={closeModal}>
      <Card>
        <CardContent>
          <form onSubmit={save}>
            <input
              value={name}
              type="text"
              placeholder="Enter Your Name"
              className="mb-4"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              value={email}
              type="email"
              placeholder="Enter Your Email"
              className="mr-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              value={mobile}
              type="text"
              placeholder="Enter Your Number"
              onChange={(e) => setMobile(e.target.value)}
            />
            <br />
            <input
              value={project}
              type="text"
              placeholder="Enter Project Name"
              className="mt-4"
              onChange={(e) => setProject(e.target.value)}
            />
            <br />
            <input
              value={task}
              type="text"
              placeholder="Enter Task description"
              className="mt-4"
              onChange={(e) => setTask(e.target.value)}
            />
            <br />
            <input
              value={start}
              type="date"
              placeholder="Start Date"
              className="mt-4 mr-4"
              onChange={(e) => setStart(e.target.value)}
            />

            <input
              value={end}
              type="date"
              placeholder="Target Date"
              className="mt-4"
              onChange={(e) => setEnd(e.target.value)}
            />
            <br />

            <div className="form-check form-check-inline">
              <input
                checked={status === "Planned"}
                className="form-check-input"
                data="lable1"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                onChange={(e) => {
                  console.log("changed");
                  setStatus("Planned");
                }}
              />
              <label className="form-check-label" for="inlineRadio1">
                Planned
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                checked={status === "In-Progress"}
                className="form-check-input"
                data="lable2"
                type="radio"
                onChange={(e) => setStatus("In-Progress")}
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" for="inlineRadio2">
                in-process
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                checked={status === "Done"}
                className="form-check-input"
                data="lable3"
                type="radio"
                onChange={(e) => setStatus("Done")}
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label className="form-check-label" for="inlineRadio3">
                done
              </label>
            </div>
            {/* //---------- */}
            <div className="row">
              <button className="mt-4 btn btn-info" type="submit">
                save
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default Edit;
