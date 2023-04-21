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
    <div className='container text-bg-warning bg-opacity-25 p-3 w-75 rounded-3 mt-5'>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="color" className='m-4'>Choose A Color:</label>
          <input type="text" name='color' value={box.color} className='justify-content-end' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="size" className='m-3'>How big of a Box?</label>
          <input type="number" name="size" value={box.size} className='justify-content-end' onChange={handleChange}/>
        </div>
        <div className='d-flex justify-content-center'>
          <button>Add</button>
        </div>
        
      </form>
    </div>
  )
}

export default Form