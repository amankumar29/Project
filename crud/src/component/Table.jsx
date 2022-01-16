import React from 'react'

const Table = (props) => {
    return (
        <>
            {/* <h4>{JSON.stringify(props.data)}</h4> */}
            <table>
                <thead>
                    <tr>
                        <th>Sl.No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((ele)=>{
                        const {id,name,email,mobile,task}=ele
                        return <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{mobile}</td>
                        <td>{task}</td>
                        <td><i class="far fa-edit"></i><i class="far fa-trash-alt"></i></td>
                    </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table
