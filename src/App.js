import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState,useEffect} from 'react'
function App() {
  const[showAddTask,setShowAddTask]=useState(false)
  const[tasks,setTasks]=useState([])
  useEffect(()=> {
    const getTasks =async ()=>{
      const tasksFromServer=await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [] //empty array for dependancies

  )
  const fetchTasks=async()=>{
      const res=await fetch('http://localhost:5000/tasks')
      const data =await res.json()
      return(data)

    }
  const addTask=async(task)=>{
    const res= await fetch(`http://localhost:5000/tasks`,{
                           method:'POST',
                           headers:{
                             'Content-type' :'application/json'
                           },
                           body:JSON.stringify(task)
    })
    const data=await res.json()
    setTasks([...tasks,data])

   /* const id=Math.floor(Math.random()*1000)
    console.log(id)
    const newTask={id,...task}
    setTasks([...tasks,newTask])*/

  }
  const deleteTask=async(id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`
                ,{method:'DELETE'})

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
