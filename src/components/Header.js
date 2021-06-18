import Button from './Button'
const Header =({onAdd,showAdd})=>{
        return (
        <header>
        <h1 className='text-blue-500 text-8xl text-center' > To Do List </h1>
          <Button className='$(showAdd ? "bg-red-500" : "bg-green-500")'
            text={showAdd ? 'Close Form' : 'Add Task'}
            color={showAdd ? 'red' : 'blue'}
            onClick={onAdd} />
        </header>
    )

}
export default Header
