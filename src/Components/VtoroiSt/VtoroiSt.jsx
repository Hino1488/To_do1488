import React, { useState, useContext } from 'react'
import "./VtoroiSt.css"
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from "react-router-dom";

export const VtoroiSt = () => {
    const[llogin, setLogin] = useState("")
    const {loginUser} = useContext(AuthContext);
    const[pass, setPass] = useState("")
    const navigate = useNavigate();

    function loginHandler() {
        event.preventDefault();
    
        loginUser(llogin, pass)
    setLogin("")
    setPass("")

    navigate("/sigma");
    }
    

    return (

        <div className={`MainVtst`}  >



            <form >
                <h2>Login</h2>
                <label htmlFor="">Email</label>
                <input type="Email" placeholder='Enter Email' className='Ema' value={llogin } onChange={(e) => setLogin(e.target.value)} />
                <label htmlFor="">Password</label>
              

                <input type="Password" placeholder='Enter Password' value={pass} className='Pas' onChange={(e) => setPass(e.target.value)} />
                <button onClick={loginHandler} >Finish Log</button>

            </form>

        </div>
    )
}
