import React, { useState } from 'react'

export default function Counter() {
    let [num,setNum]=useState(10);


    function addNum(){
     setNum(num+1)
     console.log(num);
    }
  return (
    <div className='flex gap-4 mt-5 justify-center'>
        <label >{num}</label>
        <button className='py-2 px-5 bg-red-600' onClick={addNum}>add+1</button>
    </div>
  )
}
