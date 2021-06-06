import {useState} from 'react'
const AddTask=({onAdd})=>{
  const[text,setText]=useState('')
  const[day,setDay]=useState('')
  const onSubmit=(event)=>{
    event.preventDefault()
    if(!text){
      alert("Task must be added")
    }
    onAdd({text,day})
    setText('')
    setDay('')

  }
    return (

        <form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
              onSubmit={onSubmit}>
        <div className='form-control'>

        <label class='block text-indigo-700 text-m font-bold mb-2'>
          Add Task </label>
        <input class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
               type='text' value={text} onChange={(e)=>
          setText(e.target.value)} placeholder='Task'/>
        </div>
          <div className='form-control'>
        <label class='block text-indigo-700 text-m font-bold mb-2'>
          Time  </label>
        <input class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
               type='text' value={day}  onChange={(e)=>
          setDay(e.target.value)}  placeholder='Add Time'/>
        </div>
          <input class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline'
                 type='submit' value='Add'/>

        </form>
    )

}

export default AddTask
