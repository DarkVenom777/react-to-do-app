import {FaTimes} from 'react-icons/fa'



const Task=({task,onDelete})=> {


      return (

        <div className='shadow-md b  font-serif text-lg text-purple-700 mb-4'>
        <div className='bg-gray-100 flex-space-x-5 font-bold ' >

        <h3 className='inline-block mr-8 '> {task.text} {"    "}
          <FaTimes className='inline-block ml-8' style={{color:'red', cursor:'pointer'}}

                                  onClick={()=>onDelete(task.id)}/> </h3>
          </div>
          <p className='bg-gray-100'> {task.day} {task.time} {"\n"} </p>
        </div>
    )
}
export default Task
