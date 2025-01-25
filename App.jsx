import React , {useState} from 'react'

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Hello',e);
    setUsername("");//Vpis khali string la dega
  }
  const [username, setUsername] = useState("")

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <h1>Form of Jee</h1>
        <input 
        value={username}//isme jo likhoge vo fix rahega 
        onChange={(e)=>{
          setUsername(e.target.value);
        }}
        className='px-4 py-3 color-white text-xl m-5' 
        type="text" 
        placeholder='Enter your Name'/>
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
