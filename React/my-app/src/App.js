// import logo from './logo.svg';
import './App.css';
import Header from './header';
import Employee from './Employee';
// import Content from './Content';
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

  return (
    <div className="App">
      <Header></Header>
      <Employee/>
      {/* <Content></Content> */}
      {/* <MileStone></MileStone> */}
      {/*  <Content groceryList = {groceryitems} /> */}
    </div>
  );
}

export default App;
