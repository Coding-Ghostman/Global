import React,{useState,useEffect} from 'react'


const Todos=()=>{

    const [todos,setTodos]=useState([])
    
    useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
     // .then(json => console.log(json))
     .then(json=>setTodos(json))
    },[])
    

    return(
        <div>
            <h1>Total Todos : {todos.length}</h1>
            <div>
            <table class = "Employee_table">
                <tr>
                    <th>User ID</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                {todos.map((items) => 
                <tr key = {items.id}>
                    <td>{items.userId}</td>
                    <td>{items.id}</td>
                    <td>{items.title}</td>
                    <td>{items.completed.toString()}</td>
                </tr>)}
            </table>
            </div>
        </div>
    )
}

export default Todos