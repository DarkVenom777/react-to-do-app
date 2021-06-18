const Button=({color,text,onClick})=>{
    return (
        <button
          onClick={onClick}

          className=" mt-4 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border bord0er-blue-700 rounded"
         > {text} </button>  )
}
export default Button
