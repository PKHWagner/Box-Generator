import React, {useState} from 'react'

const Form = ({allBoxes, setAllBoxes}) => {
  
  const [box, setBox]=useState({
    color:"",
    size: 50 
  })

  const handleChange = (e) => {
    setBox({...box, [e.target.name]: e.target.value})
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    setAllBoxes([...allBoxes, {
      color: box.color,
      size: box.size + "px"
    }])
    setBox({
      color: "",
      size: 50
    })

  }

  return (
    <div className='container mt-5'>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="color" className='m-3'>Choose A Color:</label>
          <input type="text" name='color' value={box.color} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="size" className='m-3'>How big of a Box?</label>
          <input type="number" name="size" value={box.size} onChange={handleChange}/>
        </div>
        <button className='mx-auto'>Add</button>
      </form>
    </div>
  )
}

export default Form