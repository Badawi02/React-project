import React, { useState } from 'react'
import { countercontext } from './Context'

export default function Counterprovider(props) {
  let[count,setcount] = useState(0);

  let increase = () => {
    setcount(count +1);
  };

  let decrease = () => {
    if (!(count === 0)){
      setcount(count -1);
    }
  };
  return (
    <countercontext.Provider value={
      {count,increase,decrease}
    }>
      {props.children}
    </countercontext.Provider>
  )
}
