const Button=({onClick,showAdd})=>{
    return (
        <button
          className=" mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border bord0er-blue-700 rounded"
          onClick={onClick} >   {showAdd ? 'Close' :'Add Task'}</button>  )
}
export default Button
