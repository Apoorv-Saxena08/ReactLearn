import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () =>{
    const response =  await axios.get('https://picsum.photos/v2/list?page=2&limit=10')
    // const data = response.data // this will be the array of objects
    setData(response.data)
    console.log(data)
  }
  return (
    <div class="dibba">
      <button onClick={getData} class="btn" >Get Data</button>
      <div class="dataview">{data.map(function(elem , idx){
        return <div key = {idx} class="card">
          <img src={elem.download_url} alt="" />
          <h1>{elem.author}</h1>
        </div>
      })}</div>
    </div>
  )
}

export default App
