import * as React from "react "
const welcome ={
  greeting: "Hey",
  title: "React",
}
function App() {
  
  return (
    <div>
      <div>
        <h1>{welcome.greeting} {welcome.title}</h1>
        <label htmlFor="search">Search: </label>
         <input type="text" id= "search" />
      </div>
      
    </div>
  )
}

export default App