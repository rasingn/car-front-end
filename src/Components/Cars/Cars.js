import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddCar from './AddCar'
import Car from './Car'

export default function Cars() {
const [CarsList,setCarsList]=useState([])

useEffect(()=>{
    laodCars()
},[])

const laodCars=()=>{
    axios.get('http://localhost:4000/')
    .then((result)=>{
     console.log(result);
     setCarsList(result.data)
    })
    .catch((error)=>{
        console.log(error);
    })

}

  return (
    <div>
        <AddCar/>
        <table className="table w-full">
        <thead className="border-b">
          <tr>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              id
            </th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              name
            </th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              action
            </th>
          </tr>
          </thead>
          <tbody>

            {CarsList.map(item=> <Car id={item.id} brand={item.brand} />)}
          
            
        
     
    
          </tbody>
        </table>
    </div>
  )
}
