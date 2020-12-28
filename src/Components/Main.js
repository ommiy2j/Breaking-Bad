import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'

const Main = ({handlelogout}) => {
    return (
        <div className="main">
            <header className='container'>
                <div className="img">
                    <img src={logo} alt="" /> 
                </div>
            </header>
            <button className="logout" onClick={handlelogout}>LogOut</button>
            <div className="navigation">
                <NavLink className="navLinks" activeClassName='active_class'  to='/characters'>Characters</NavLink>
                <NavLink className="navLinks" activeClassName='active_class'  to='/episodes'>Episodes</NavLink>
                <NavLink className="navLinks" activeClassName='active_class'  to='/quotes'>Quotes</NavLink>
                <NavLink className="navLinks" activeClassName='active_class'  to='/deaths'>Death</NavLink>
            </div>
            {/* <div className="auth">
                <div className="login">
                    Have an account...?
                    <button>LogIn</button>
                </div>
                <div className="sign">
                    Or <button>Sign Up</button>
                </div>
            </div> */}
        </div>
    )
}

export default Main;