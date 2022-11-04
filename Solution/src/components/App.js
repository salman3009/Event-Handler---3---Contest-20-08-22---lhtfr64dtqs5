import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) =>{
    console.log(`Input in #${event.target.id} is ${event.target.value}`)
  }
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" onChange={handleInput} type={'text'} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input" onChange={handleInput} type={'number'} />
      <br/>
    </div>
  )
}


export default App;
