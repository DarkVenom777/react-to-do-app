import {FaTimes} from 'react-icons/fa'
const Task=({task,onDelete})=> {
    return (
        <div className=' font-serif text-lg text-purple-700'>
        <div class='bg-gray-100 flex-space-x-5 font-bold' >
        <h3 class='inline-block '> {task.text} {"    "} <FaTimes class='inline-block' style={{color:'red', cursor:'pointer'}}

                                  onClick={()=>onDelete(task.id)}/> </h3>
          </div>
        <p div class='bg-gray-100'> {task.day} {"\n"} </p>
        </div>
    )
}
export default Task
