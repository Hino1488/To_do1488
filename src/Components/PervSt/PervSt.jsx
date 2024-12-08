import React, { useState } from 'react'
import "./PervSt.css"
import {useContext} from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
export const PervSt = () => {
const {createUser} = useContext(AuthContext);
 const [mailreg , setMailreg ] = useState("");
 const [passreg, setPassreg ] = useState("")

function registr(){

  createUser(mailreg, passreg)
  setPassreg("")
  setMailreg("")
}

  return (
<div className='regMain'> 
  <h2>Registration</h2>

<label htmlFor=""> Email</label>
<input type="text" placeholder='Email' className='EmailReg' value={mailreg} onChange={(e) => setMailreg(e.target.value)}/>
<label htmlFor=""> Password</label>
<input type="text" placeholder='Password' className='PasswordReg' value={passreg} onChange={(e) => setPassreg(e.target.value)}/>
<button onClick={registr}> Add</button>

</div>
  )
}
