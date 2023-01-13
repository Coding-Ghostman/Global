import React, {useState} from 'react';

    const Employee=({saveEmployee})=>{
    const [id,setId]=useState()
    const [name,setName]=useState('')
    const [dept,setDept]=useState('')
    const [sal,setSal]=useState()

    const addEmployee=(e)=>{
        e.preventDefault()
        console.log('id ',id)
        console.log('name ',name)
        saveEmployee(id, name, dept, sal)
    }
    return(
        <div class = "form_div">
            <form onSubmit={addEmployee}>
                <label>Id</label><br/>
                <input value={id} onChange={(e)=>setId(e.target.value)}/><br/>
                <label>Name</label><br/>
                <input value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <label>Department</label><br/>
                <input value={dept} onChange={(e)=>setDept(e.target.value)}/><br/>
                <label>Salary</label><br/>
                <input value={sal} onChange={(e)=>setSal(e.target.value)}/><br/>
                <input type="submit" value="Add Employee"/>                
            </form>
        </div>
    )
}

export default Employee