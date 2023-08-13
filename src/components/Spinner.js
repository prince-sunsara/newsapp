import React from 'react'
import spinner from "./spinner.gif"

function Spinner() {
  return (
    <div className='text-center'>
      <img className='my-3' src={spinner} alt="loading.." style={{ width: "50px" }} />
    </div>
  )
}

export default Spinner;