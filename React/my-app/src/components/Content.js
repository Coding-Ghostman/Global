import React from "react";

const Content = ({ listEmployees }) => {
   return (
      <div>
         <div className="Employee_header">
            <h3>Employee Table</h3>
         </div>
         <div>
            <table className="Employee_table">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Dept</th>
                     <th>Salary</th>
                  </tr>
               </thead>
               <tbody>
                  {listEmployees.map((items) => (
                     <tr key={items.id}>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.dept}</td>
                        <td>{items.sal}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Content;
