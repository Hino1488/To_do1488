import { Link, useLocation } from "react-router-dom";
import './Nav.css'
import { useContext, useEffect } from 'react';
import counterContext from '../CounterContext/CounterContext';
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { AuthContext } from "../AuthProvider/AuthProvider";
export const Nav = () => {
  const { logOut } = useContext(AuthContext);
  const { theme, nextTheme } = useContext(counterContext);
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light")
      document.body.classList.remove("dark")
    } else {
      document.body.classList.add("dark")
      document.body.classList.remove("light")
    }


  }, [theme])
  let {pathname} = useLocation();
  
  console.log(pathname)
  return (
    <div style={{ display: 'flex', gap: '10px' }} className="Navig">
    {pathname.startsWith("/sigma") ? null:   <Link to="/" >Go to register</Link>}
  {pathname.startsWith("/sigma")? null  :  <Link to="/login">Go to login</Link> }
  {pathname == "/sigma"? null:  <Link to="/sigma">Go to card</Link>}
      {pathname === '/sigma' &&<button onClick={logOut}> Log out</button>}

      <div className='yo'>
        {theme === "light" ? <CiLight onClick={nextTheme} className='Sun' /> : <MdNightlight onClick={nextTheme} className='Noch' />}
      </div>
    </div>
  );
};
