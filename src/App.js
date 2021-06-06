import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'
function App() {
  const[showAddTask,setShowAddTask]=useState(false)
  const[tasks,setTasks]=useState([
        {
            id:1,
            text:'Eat',
            day:'Now',

        },
        {
            id:2,
            text:'Sleep',
            day:'Tonight',

        },
        {
            id:3,
            text:'Repeat',
            day:'Everyday',

        },
  ])
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*1000)
    console.log(id)
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))


  }
  return (
    <div  className="container">

      <Header onAdd={()=>setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask&&<AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask}/>
          </div>
  );
}

export default App;
