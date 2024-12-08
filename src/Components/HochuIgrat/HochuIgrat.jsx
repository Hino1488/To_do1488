import React from 'react'
import { Link } from 'react-router-dom'
export const HochuIgrat = ({sigm}) => {
  return (
   <div className='grid grid-cols-3 p-3 gap-3' >
    
    {sigm?.map(el => <Link to={`/sigma/${el.id}`}>  <div key={el.name} className='flex justify-center border border-sky-500 items-center gap-2 ' >
      <img src={el.img} alt="" width="100px" height="100px" />
      <div className='flex flex-col'>
        <div> {el.name} </div>
        <div>{el.age} Ages</div>
        <div>{el.price}$</div>
      </div>
    </div></Link>)}
   
  </div> 
  )
}
