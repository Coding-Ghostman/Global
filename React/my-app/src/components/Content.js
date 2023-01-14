import React from "react";

const Content = ({listEmployees}) => {
    return(
        <div>
            <div class = "Employee_header">
                <h3>Employee Table</h3>
            </div>
            <div>
            <table class = "Employee_table">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Dept</th>
                    <th>Salary</th>
                </tr>
                {listEmployees.map((items) => 
                <tr key = {items.id}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.dept}</td>
                    <td>{items.salary}</td>
                </tr>)}
            </table>
            </div>
        </div>
    );
}

export default Content;