import Button from './Button'
const Header =({onAdd,showAdd})=>{
        return (
        <header>
        <h1 class='text-blue-500 text-8xl text-center' > To Do List </h1>
          <Button onClick={onAdd}/>
        </header>
    )

}
export default Header
