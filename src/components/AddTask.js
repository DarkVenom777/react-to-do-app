import {useState} from 'react'



const AddTask=({onAdd})=>{

  const[text,setText]=useState('')
  const[day,setDay]=useState('')
  const[time,setTime]=useState('')
  const onSubmit=(event)=>{
    event.preventDefault()
    if(!text){
      alert("Task must be added")
      return
    }
    else{
    onAdd({text,day,time})
    setText('')
      setDay('')
      setTime('')
    }

  }
    return (

        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
              onSubmit={onSubmit}>
        <div className='form-control'>

        <label className='block text-indigo-700 text-m font-bold mb-2'>
          Task </label>
        <input className='shadow appearance-none border rounded mb-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
               type='text' value={text} onChange={(e)=>
                 setText(e.target.value)} placeholder='Input Task'/>
        </div>
          <div className='form-control'>
        <label className='block text-indigo-700 text-m font-bold mb-2'>
          Date  </label>
       <input className='shadow appearance-none border rounded mb-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='date' value={day} onChange={(e)=>
                 setDay(e.target.value)}  />
           <label className='block text-indigo-700 text-m font-bold mb-2'>
          Time  </label>

             <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='time'value={time} onChange={(e)=>
                 setTime(e.target.value)}  />

        </div>
          <input className=' mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline'
                 type='submit' value='Add'/>

        </form>
    )

}

export default AddTask
