import React, { useState,useEffect} from 'react'

export const LoginForm = () => {
    const [data, setData] = useState([{}])
    function SubmitLogin(){

        useEffect(() => {
            fetch("/login").then(
                res => res.json()
            ).then(
                data => {
                setData(data)
                console.log(data)
                }
            )
        }, []);
    }
        

    

    return (
    <>
        <div className='form-container'>
            <div className='login-container'>
            <h2>Login</h2>
                <form className='form' action="/login" method='POST'>
                    <label htmlFor='inputUsername'>Username:</label>
                    <input name='inputUsername' type='text' ></input>
                    <label htmlFor='inputPassword'>Password:</label>
                    <input name='inputPassword' type='password' ></input>
                    <button className='btn' type='submit' onClick={SubmitLogin} >Login</button>
                
                </form>
                
            </div>

        
        
        

        </div>
    </>
    
    )
}
