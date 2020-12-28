import React from 'react'
import './auth.css'
const LogIn = (props) => {
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        handleSignup,
        sethasAccount,
        emailError,
        passError,
        hasAccount
    } = props;
    return (
        <div>
            <section className="login">
                <div className="loginContainer">
                    <label htmlFor="usename">Username</label>
                    <input type="email"
                        autoFocus
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <p className="errMsg">{emailError}</p>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />
                    <p className="errMsg">{passError}</p>
                    <div className="btnContainer">
                        {
                            hasAccount ? (
                                <>
                                    <button onClick={handleLogin}>Sign In</button>
                                    <p>Don't have an account..?<span onClick={()=>sethasAccount(!hasAccount)}>Sign Up</span></p>
                                </>
                            ):
                                (
                                    <>
                                        <button onClick={handleSignup}>Sign Up</button>
                                        <p>Have an account..?<span onClick={()=>sethasAccount(!hasAccount)}>Sign In</span></p>
                                    </>
                                )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default LogIn;

