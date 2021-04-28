import React, {useState} from 'react';
import './Login.css';
import {useHistory} from 'react-router-dom';

function Login(){

            const[email,setEmail] = useState('');
            const[password,setPassword] = useState('');
            let history=useHistory();

            const prasanna =()=>{
                //alert(email);
                //alert(password);
                if (email=="prasanna@gmail.com" && password=="1234"){
                    history.push('/Feed');    
                }
                else{
                    alert ("login unsuccessfull");
                }
                
           }

    return(   

<div>
    <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-info">Login</h3>
                            <div className="form-group">
                                <label for="username" className="text-info">email:</label><br/>
                                <input type="email" name="username" id="username" className="form-control" onChange = {(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Password:</label><br/>
                                <input type="password" name="password" id="password" className="form-control" onChange = {(e)=>setPassword(e.target.value)}/><br/>
                            </div>
                            <div className="form-group">
                                <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                <button type="button" name="submit" className="btn btn-info btn-md" onClick={ ()=> prasanna() }>submit</button>
                            </div>
                            <div id="register-link" className="text-right">
                                <a href="#" className="text-info ml">Register here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 
    
    
    );
    }
    
    export default Login;//</form>