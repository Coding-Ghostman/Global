// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Employee from './components/Employee';
import {useState} from 'react'
import Content from './components/Content';
import Todos from './components/Todos';
// import MileStone from './Milestone';


function App() {
//   const groceryitems=[
//     {
//         'slno':1,
//         'item':'Rice',
//         'rate':60,
//         'qty':10,
//         'amount':600
//     },
//     {
//         'slno':2,
//         'item':'Dal',
//         'rate':90,
//         'qty':2,
//         'amount':180
//     },
//     {
//         'slno':3,
//         'item':'Oil',
//         'rate':100,
//         'qty':2,
//         'amount':200
//     },
// ]
  
  const [employees, setEmployees] = useState([])

  const saveEmployeeHandler = (id, name, dept, sal) => {
    let emp = {id:id, name:name, dept:dept, sal:sal}
    // console.log("emp #", emp);
    setEmployees([...employees, emp])
    // console.log("Employees ##", employees);
  }


  return (
    <div className="App">
      <Header></Header>
      <Employee saveEmployee = {saveEmployeeHandler}/>
      <Content listEmployees = {employees}/>
      <Todos></Todos>
      {/* <Content></Content> */}
      {/* <MileStone></MileStone> */}
      {/*  <Content groceryList = {groceryitems} /> */}
    </div>
  );
}

export default App;
