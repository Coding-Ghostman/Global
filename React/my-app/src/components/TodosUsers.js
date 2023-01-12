import React,{useState,useEffect} from 'react'


const TodosUsers=()=>{

    const [todosUsers,setTodosUsers]=useState([])
    
    useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
     // .then(json => console.log(json))
     .then(json=>setTodosUsers(json))
    },[])
    

    return(
        <div>
            <h1>Total Todos : {todosUsers.length}</h1>
            <div>
            <table class = "Employee_table">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Company</th>
                </tr>
                {todosUsers.map((items) => 
                <tr key = {items.id}>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.address.city}</td>
                    <td>{items.phone.substring(0,13)}</td>
                    <td>{items.company.name}</td>
                </tr>)}
            </table>
            </div>
        </div>
    )
}

export default TodosUsers