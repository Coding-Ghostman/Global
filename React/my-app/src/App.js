// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Employee from './components/Employee';
import {useState, useEffect} from 'react'
import Content from './components/Content';
// import Todos from './components/Todos';
// import TodosUsers from './components/TodosUsers';
// import MileStone from './Milestone';


function App() {
  
  const [employees,setEmployees]=useState([])

  useEffect(()=>{
      fetch('http://127.0.0.1:5000/listEmployee')
      .then(res=>res.json())
     // .then(data=>console.log(data))
      .then(data=>setEmployees(data))
  },[]);

  const saveEmployeeHandler = (id, name, dept, sal) => {
    let emp = {id:id, name:name, dept:dept, sal:sal}
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emp)
    };
    console.log('body ##',requestOptions.body)
  
    fetch('http://localhost:5000/addEmployee', requestOptions)
      .then(response => response.json())
      .then(data => setEmployees([...employees,data]));
  }   

  return (
    <div className="App">
      <Header></Header>
      <Employee saveEmployee = {saveEmployeeHandler}/>
      <Content listEmployees = {employees}/>
      {/* <TodosUsers></TodosUsers> */}
      {/* <Content></Content> */}
      {/* <MileStone></MileStone> */}
      {/*  <Content groceryList = {groceryitems} /> */}
    </div>
  );
}

export default App;
