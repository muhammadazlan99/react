import {  } from 'react'
import Button from "./components/forms/buttons/Button.jsx";
import TextField from './components/inputs/textfields.jsx';
import Header from './components/NewHeader.jsx';


function App() {
  return (
    <>
      <Header/>
      
    </>
  );
}




//   useEffect(() =>{
//     taskRef.current.value = ""
//     priorityRef.current.value = ""
//     statusRef.current.value = ""
//   }, [list])


//   function addTask() {
//     const data = taskRef.current.getChildData()
//     console.log("data", data);

//     // let newList = [...list,
//     //   `task : ${taskRef.current.value} 
//     //   | status : ${statusRef.current.value} 
//     //   | priority : ${priorityRef.current.value}`]
//     // setList(newList)
//     // headingRef.current.style.color = "red"
//     // headingRef.current.style.backgroundColor = "red"
//   }


//   return (
//     <>
//       <h1 ref={headingRef}>Todo App</h1>

//       <TextField placeholder="Your task" ref={taskRef}/>
//       <TextField placeholder="Priority" ref={priorityRef}/>
//       <TextField placeholder="Status" ref={statusRef}/>


//       <Button title="ADD" handler={addTask} />

//       <ul>
//         {
//           list.map((task, index) => {
//             return <li key={index}>
//               {task}
//               <Button title="delete" id={index}/>
//             </li>
//           })
//         }
//       </ul>
//     </>
//   )
// }


 export default App;