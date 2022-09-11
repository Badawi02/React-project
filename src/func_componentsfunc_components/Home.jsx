import React, { useContext } from 'react'
import { countercontext } from './Context';


export default function Home() {
  let {count , increase, decrease} = useContext(countercontext);
  return (
    <div >
        <h1 className='alert alert-info p-5'>
            Hello from Home
        </h1>
        <div className='bg-dark p-2'>
        <p className='mt-4 fs-3 text-light'>Counter = <strong className='text-danger'>{count}</strong> </p>
        {count === 0 && (
            <p className='text-danger'>counter can not be less than 0</p>
        )}
        
        <button className='btn btn-success mx-3' onClick={increase}> + </button>
        <button className='btn btn-danger mx-3' onClick={decrease}> - </button>
      </div>
    </div>
    
  )
}
