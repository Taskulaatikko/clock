import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [time, setTime] = useState(new Date())

  /*function updateTime() {
    setTime (new Date())
  }*/

useEffect(() => {
  //const id = setInterval(updateTime, 1000)
  const id = setInterval(() => {
    setTime(new Date())
  })
  return() => {
    clearInterval(id)
  }
},[])


  return (
<div style={{margin: '30px'}}>
  <p>Kello on: {time.toLocaleTimeString()}</p>
</div>
  );
}

export default App;
