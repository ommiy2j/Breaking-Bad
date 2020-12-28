import React, { useState, useEffect } from 'react';
import './App.css';
import LogIn from './Components/Auth/LogIn';
import Main from './Components/Main';
import fire from './fire'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Characters from './Components/Characters';
import Episodes from './Components/Episodes';
import Deaths from './Components/Deaths';
import Quotes from './Components/Quotes';


const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passError, setPassError] = useState('');
  const [hasAccount, sethasAccount] = useState(false);


  const clearInput = () => {
      setEmail('');
      setPassword('');

  }

  const clearError = () => {
      setemailError('');
      setPassError('');

  }


  const handleLogin = () => {
      clearError();
      fire
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch(err => {
              switch (err.code) {
                  case "auth/invalid-email":
                  case "auth/user-disabled":
                  case "auth/user-not-found":
                      setemailError(err.message)
                      break
                  case "auth/wrong-password":
                      setPassError(err.message)
                      break
              }
          } )
  }
  const handleSignup = () => {
      clearError();
      fire
          .auth()
          .createUserWithEmailAndPassword (email, password)
          .catch(err => {
              switch (err.code) {
                  case "auth/email-already-in-use":
                  case "auth/invalid-email":
                      setemailError(err.message)
                      break
                  case "auth/weak-password":
                      setPassError(err.message)
                      break
              }
          } )
  }
  const handlelogout = () => {
      fire.auth().signOut();
  }


  const authlistner = () => {
      fire.auth().onIdTokenChanged(user => {
          if (user) {
              setUser(user);
              clearInput();
          }
          else {
              setUser('');
          }
      })
  }


  useEffect(() => {
      authlistner()
  },[])
  
  return (
    <div className="App">
      {!user ? (
        <LogIn email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        sethasAccount={sethasAccount}
        emailError={emailError}
        passError={passError}
        hasAccount={hasAccount}
      />
      ) :
        (
          <>
            <Main handlelogout={handlelogout} />
            <Switch>
              <Route path='/main' exact component={Main} />
              <Route path='/characters' component={ Characters }/>
              <Route path='/episodes' component={ Episodes }/>
              <Route path='/quotes' component={ Quotes }/>
              <Route path='/deaths' component={ Deaths }/>
            </Switch>
          </>
            
          
        )}
         
    </div>
  );
}

export default App;
