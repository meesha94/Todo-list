import React, { useState } from "react"
import { CustomForm } from "./components/form"
import { ItemsContainer } from "./components/itemscontainer"
import "./App.css"


const App = () => {
  const [list, setList] = useState([])

  const handleForm = (item) => {
    setList([...list, { value: item, complete: false }])
  }

  const handleRemove = (index) => {
    let temp = [...list]
    temp.splice(index, 1)
    setList(temp)
  }

  const handleComplete = (index) => {
    let temp = [...list]
    
    temp[index].complete = !temp[index].complete
    
    setList(temp)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <CustomForm handleForm={handleForm} />
      <ItemsContainer list={list} handleRemove={handleRemove} handleComplete={handleComplete} />
    </div>
  )
}

export default App;

